
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Service = sequelize.define('servise', {
      departement: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
   
  },{
    timestamps: false
    
  });
  return Service
}