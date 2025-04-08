const Order = require('../models/Order');

exports.submitOrder = async (req, res) => {
  try {
    const { first_name, last_name, email, product, variant, storage, color } = req.body;

    const newOrder = new Order({
      firstName: first_name,
      lastName: last_name,
      email,
      product,
      variant,
      storage,
      color
    });

    await newOrder.save();
    res.send('Order Submitted Successfully');
  } catch (error) {
    res.status(500).send('Error Submitting Order');
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).send('Error fetching orders');
  }
};
