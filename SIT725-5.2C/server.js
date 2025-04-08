const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderController = require('./controllers/orderController');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/models', express.static('models'));
app.use('/video', express.static('video'));

// Routes
app.post('/submit-order', orderController.submitOrder);
app.get('/orders', orderController.getOrders);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
