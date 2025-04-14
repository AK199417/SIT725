// 1. Import Express
const express = require('express');
// 2. Create an Express app
const app = express();
const path = require('path');
const port = 3000;

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('css'));

// Handle GET request for calculation
app.get('/add', (req, res) => {
    const { no1, no2 } = req.query;


    const result = Number(no1) + Number(no2);
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const { no1, no2 } = req.query;

    const result = Number(no1) - Number(no2);
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const { no1, no2 } = req.query;

    const result = Number(no1) * Number(no2);
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const { no1, no2 } = req.query;

    const n1 = Number(no1);
    const n2 = Number(no2);

    if (n2 === 0) {
        return res.json({ error: 'Error: Division by zero' });
    }

    const result = n1 / n2;
    res.json({ result });
});

// Only start server if not in test mode
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app; // Export for testing

