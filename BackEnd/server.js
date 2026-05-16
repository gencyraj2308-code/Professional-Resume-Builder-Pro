const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Tell Express to serve all your frontend static assets correctly
// This points out of the BackEnd folder and into your frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Parse JSON request payloads
app.use(express.json());

// Main entry point - serve index.html when someone lands on the page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`[gencyraj-workspace] Backend running on port ${PORT}`);
});