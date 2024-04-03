// const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const connection = new Sequelize('healthcare', 'root', 'root', {
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
db.Service=require('./service.model.js')(connection,DataTypes)
db.Review=require('./reviews.model.js')(connection,DataTypes)


db.UserChat=require('./UserChat.js')(connection,DataTypes)
db.Message=require('./Message.js')(connection,DataTypes)
db.Conversation=require('./Conversation.js')(connection,DataTypes)
db.Room=require('./room.js')(connection,DataTypes)

db.Room.hasMany(db.Message)
db.Message.belongsTo(db.Room)
db.UserChat.belongsToMany(db.Room,{through:db.Conversation})
db.Room.belongsToMany(db.UserChat,{through:db.Conversation})
db.UserChat.hasMany(db.Message)
db.Message.belongsTo(db.UserChat)



db.Doctor.hasMany(db.Availabilty)
db.Availabilty.belongsTo(db.Doctor)



db.Doctor.hasMany(db.Availabilty)
db.Availabilty.belongsTo(db.Doctor)


db.Service.hasMany(db.Doctor) 
db.Doctor.belongsTo(db.Service)




db.Doctor.hasMany(db.Appoitment) 
db.Appoitment.belongsTo(db.Doctor)

db.Doctor.hasMany(db.Review)
db.Review.belongsTo(db.Doctor)


//  connection.sync({force:true}) 
//  db.Message.sync({force:true}) 




module.exports = db;
