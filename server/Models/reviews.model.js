const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Review = sequelize.define('review', {
     
   
    comment: {
      type: DataTypes.STRING,
    },
   
  });
  return Review 
}