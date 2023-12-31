const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {PrismaClient} = require('@prisma/client');
const session = require('express-session');

const router = express.Router();
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
const saltRounds = 10;

router.use(express.json());
router.use(session({secret: '547a0283', resave: false, saveUninitialized: false}));
router.use(passport.initialize());
router.use(passport.session());



// Passport Local Strategy
passport.use(new LocalStrategy(
    {usernameField: 'email'},
    async (email, password, done) => {
        try {
            const user = await prisma.user.findUnique({where: {email}});
            if (!user) {
                return done(null, false, {message: 'Incorrect email.'});
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return done(null, false, {message: 'Incorrect password.'});
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

// Passport serializeUser and deserializeUser
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({where: {id}});
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

// Registration endpoint
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({ message: 'User created', userId: newUser.id });
    } catch (error) {
        console.error("Registration Error: ", error);

        // Send detailed error response
        res.status(500).json({
            error: 'Error registering new user',
            errorMessage: error.message,
            errorDetails: error
        });
    }
});


// Login endpoint using Passport
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({message: 'Logged in successfully'});
});

module.exports = router;
