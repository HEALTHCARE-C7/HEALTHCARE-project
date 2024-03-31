
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Service = sequelize.define('servise', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        
      },
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