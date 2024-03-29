// const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const connection = new Sequelize('healthcare', 'brahim', 'root', {
  host: 'localhost',
  dialect: 'mysql' 
});

async function connectionTest (){     
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  connectionTest()
  const db={}

db.Doctor=require('./doctor.model.js')(connection,DataTypes)
db.Patient=require('./patien.model.js')(connection,DataTypes)
db.Appoitment=require('./appoitment.model.js')(connection,DataTypes)
db.Availabilty=require('./availabilty.model.js')(connection,DataTypes)


db.Doctor.hasMany(db.Availabilty)
db.Availabilty.belongsTo(db.Doctor)





db.Patient.hasMany(db.Appoitment) 
db.Appoitment.belongsTo(db.Patient)



//  connection.sync({force:true}) 
//  db.Appoitment.sync({force:true}) 




module.exports = db;
