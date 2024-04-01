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


db.UserChat=require('../Models/UserChat.js')(connection,DataTypes)
db.Message=require('../Models/Message.js')(connection,DataTypes)
db.Conversation=require('../Models/Conversation.js')(connection,DataTypes)
db.UserToConversation=require('../Models/UserToConversation.js')(connection,DataTypes)


// db.UserChat.hasMany(db.UserToConversation);
// db.UserToConversation.belongsTo(db.UserChat);
// db.Conversation.hasMany(db.UserToConversation);
// db.UserToConversation.belongsTo(db.Conversation);
// db.Conversation.hasMany(db.Message);
// db.Message.belongsTo(db.Conversation);
// db.UserChat.hasMany(db.Message);
// db.Message.belongsTo(db.UserChat);


db.Doctor.hasMany(db.Availabilty)
db.Availabilty.belongsTo(db.Doctor)



db.Doctor.hasMany(db.Availabilty)
db.Availabilty.belongsTo(db.Doctor)


db.Service.hasMany(db.Doctor) 
db.Doctor.belongsTo(db.Service)




db.Doctor.hasMany(db.Appoitment) 
db.Appoitment.belongsTo(db.Doctor)




//  connection.sync({force:true}) 
//  db.Review.sync({force:true}) 




module.exports = db;
