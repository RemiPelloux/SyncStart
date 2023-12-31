const express = require('express');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Frontend URL
}));

app.use(authRoutes);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
