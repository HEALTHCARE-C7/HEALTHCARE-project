const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Appoitment = sequelize.define('appoitment', {
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
        defautValue: new Date() 
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
     defautValue: new Date()
    },
   
  },{
    timestamps: false
    
  });
  return Appoitment
}