const express = require("express");
require('dotenv').config()
const doctorRoutes = require('./routes/docteur.routes')
const patientRoutes = require('./routes/patient.routes')
const appoitmentRoutes = require('./routes/appoitment.routes')
const availabiltyRoutes = require('./routes/availabilty.routes')
const reviewsRoutes = require('./routes/reviews.routes')
const nodeMailer= require ('./controllers/nodeMailer')
const cors=require('cors')


const db = require('./Models/index');

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
app.post('/api/sendmail', nodeMailer.sendMail);



app.listen(PORT, () => {
  console.log(`Express app listening on port http://localhost:${PORT}`);
});
