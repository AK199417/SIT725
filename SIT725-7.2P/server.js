const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderController = require('./controllers/orderController');

const app = express();
const server = http.createServer(app); // ✅ Create server first
const io = socketIo(server); // ✅ Now pass server to socket.io

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

// Socket.io connection
io.on('connection', (socket) => {
  console.log('✅ A user connected:', socket.id);

  const today = new Date().toDateString();
  socket.emit('welcome', `Welcome to Connect Mobile Shop! Today is ${today}`);

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
