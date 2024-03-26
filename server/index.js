const express = require("express");
const doctorRoutes = require('./routes/docteur.routes')
const patientRoutes = require('./routes/patient.routes')
const appoitmentRoutes = require('./routes/appoitment.routes')
const availabiltyRoutes = require('./routes/availabilty.routes')
const reviewsRoutes = require('./routes/reviews.routes')



const db = require('./Models/index');


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/doctor",doctorRoutes);
app.use("/api/patient",patientRoutes);
app.use("/api/appoitment",appoitmentRoutes);
app.use("/api/availabilty",availabiltyRoutes);
app.use("/api/Reviews",reviewsRoutes);




app.listen(PORT, () => {
  console.log(`Express app listening on port http://localhost:${PORT}`);
});
