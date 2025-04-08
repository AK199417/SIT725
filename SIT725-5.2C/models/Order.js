const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  product: String,
  variant: String,
  storage: String,
  color: String
});

module.exports = mongoose.model('Order', orderSchema);
