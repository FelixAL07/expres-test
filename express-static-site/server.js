const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;  // Use process.env.PORT for production (like on Vercel)

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page (serves static index.html from public folder)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Route for about page (serves static about.html from public folder)
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
});

// Route for team page (serves static team.html from public folder)
app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/team.html'));
});

// Fallback for any other route (404 not found)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
