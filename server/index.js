const express = require("express");
const userRoutes = require('./routes/user.routes')

// const db = require('./database-mysql');


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/user",userRoutes);



app.listen(PORT, () => {
  console.log(`Express app listening on port http://localhost:${PORT}`);
});
