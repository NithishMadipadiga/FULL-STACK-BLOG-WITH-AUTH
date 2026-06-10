const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: 'User registered' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
