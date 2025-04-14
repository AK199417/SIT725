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
    const a = Number(no1);
    const b = Number(no2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    res.json({ result: a + b });
});

app.get('/subtract', (req, res) => {
    const { no1, no2 } = req.query;
    const a = Number(no1);
    const b = Number(no2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    res.json({ result: a - b });
});

app.get('/multiply', (req, res) => {
    const { no1, no2 } = req.query;
    const a = Number(no1);
    const b = Number(no2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    res.json({ result: a * b });
});

app.get('/divide', (req, res) => {
    const { no1, no2 } = req.query;
    const a = Number(no1);
    const b = Number(no2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    if (b === 0) {
        return res.status(400).json({ error: 'Error: Division by zero' });
    }
    res.json({ result: a / b });
});


// Only start server if not in test mode
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app; // Export for testing

