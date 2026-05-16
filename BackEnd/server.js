const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Serve frontend static assets cleanly from the root project folder
app.use(express.static(path.join(__dirname, '../Frontend')));

// Parse JSON request payloads
app.use(express.json());

// Main entry point - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`[gencyraj-workspace] Backend running on port ${PORT}`);
});