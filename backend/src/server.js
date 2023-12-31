const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(authRoutes);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
