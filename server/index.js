const express = require("express");
require('dotenv').config()
// const http = require('http');
// const socketIo = require('socket.io');

const doctorRoutes = require('./routes/docteur.routes')
const patientRoutes = require('./routes/patient.routes')
const appoitmentRoutes = require('./routes/appoitment.routes')
const availabiltyRoutes = require('./routes/availabilty.routes')
const reviewsRoutes = require('./routes/reviews.routes')
const serviceRoutes = require('./routes/service.routes')
const nodeMailer = require('./controllers/nodeMailer.js')
const UserRouter = require('./routes/UserChat.routes.js')
const MessageRouter = require('./routes/MessageChat.routes.js')
const Conversation = require('./routes/Conversation.routes.js')
const cors=require('cors')


 require('./Models/index');

console.log(process.env.NODE_ENV);
const app = express();
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/doctor",doctorRoutes);
app.use("/api/patient",patientRoutes);
app.use("/api/appoitment",appoitmentRoutes);
app.use("/api/availability",availabiltyRoutes);
app.use("/api/Reviews",reviewsRoutes);
app.use("/api/services",serviceRoutes);
app.post('/api/sendmail', nodeMailer.sendMail);


app.use('/api/chat',UserRouter)
app.use('/api/message',MessageRouter)
app.use('/api/conversation',Conversation)

// const server = http.createServer(app);
// const io = socketIo(server,()=>{
//   console.log('socket is connect');
// });
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Listen for incoming messages
//   socket.on('message', (message) => {
//       console.log('Received message:', message);

//       // Emit the message to all connected clients (including sender)
//       io.emit('message', message);
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//       console.log('A user disconnected');
//   });
// });
app.listen(PORT, () => {
  console.log(`Express app listening on port http://localhost:${PORT}`);
});
