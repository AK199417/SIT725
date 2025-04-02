const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./models/Order');



// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/models',express.static('models') );
app.use('/video', express.static('video'))
// Start the server

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-order', async (req, res) => {
    try {
      // Capture the form fields including the new ones (variant, storage, color)
      const { first_name, last_name, email, product, variant, storage, color } = req.body;
  
      // Create a new order object with the additional fields
      const newOrder = new Order({
        firstName: first_name,
        lastName: last_name,
        email,
        product,
        variant,   // Added variant
        storage,   // Added storage
        color      // Added color
      });
  
      // Save the order to the database
      await newOrder.save();
      res.send('Order Submitted Successfully');
    } catch (error) {
      res.status(500).send('Error Submitting Order');
    }
  });

app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).send('Error fetching orders');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
