// 1. Import Express
const express = require('express');
// 2. Create an Express app
const app = express();
const path = require('path');
const port = 3000;

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
