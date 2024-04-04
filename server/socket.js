

const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); // Add this

app.use(cors()); // Add cors middleware

const server = http.createServer(app); // Add this

// Add this
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Add this
// Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);
//   console.log('A user connected');

  // Listen for incoming messages
  socket.on('message', (message) => {
      console.log('Received message:', message);
      
      // Emit the message to all connected clients (including sender)
      io.emit('message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
      console.log('A user disconnected');
  });
  // We can write our socket event listeners in here...
});

server.listen(4000, () => 'Server is running on port 4000');