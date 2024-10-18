const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the folder
app.use('/dreams', express.static(path.join(__dirname, 'dreams')));

// Route for the specific path you want
app.get('/dreams/conversation-1721540624-scenario-terminal-of-truths-txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'dreams/conversation-1721540624-scenario-terminal-of-truths-txt/index.html'));
});

// Start the server
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
