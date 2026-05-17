const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 4000;

// Parse JSON request payloads
app.use(express.json());

// Dynamic Finder: Automatically detects the frontend folder regardless of spelling/casing
let frontendPath = path.join(__dirname, '../frontend');

if (!fs.existsSync(frontendPath)) {
    if (fs.existsSync(path.join(__dirname, '../FrontEnd'))) {
        frontendPath = path.join(__dirname, '../FrontEnd');
    } else if (fs.existsSync(path.join(__dirname, '../frontEnd'))) {
        frontendPath = path.join(__dirname, '../frontEnd');
    } else if (fs.existsSync(path.join(__dirname, '../Frontend'))) {
        frontendPath = path.join(__dirname, '../Frontend');
    }
}

console.log(`[Backend Configuration] Serving assets from: ${frontendPath}`);

// Serve static elements cleanly
app.use(express.static(frontendPath));

// Route entry point - server main dashboard UI page
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Boot configuration
app.listen(PORT, () => {
    console.log(`[gencyraj-workspace] Backend running on port ${PORT}`);
});