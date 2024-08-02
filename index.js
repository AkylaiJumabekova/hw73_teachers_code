const express = require('express'); // import express from 'express'

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Homepage!');
});

app.get('/about', (req, res) => {
    return res.send('<h1>About Page!</h1>');
});

app.get('/hello/:userName', (req, res) => {
    return res.send(`Hello, ${req.params.userName}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});