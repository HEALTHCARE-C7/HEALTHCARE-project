const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' 
});

//verify your connection here !
connection.authenticate();



module.exports = Book;
