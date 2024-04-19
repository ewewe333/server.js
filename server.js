// Import required modules
const express = require('express');
const app = express();
const port = 3000; // Port number for the server to listen on

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle login requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Example of simple login logic (replace with your own authentication logic)
    if (email === 'user@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
