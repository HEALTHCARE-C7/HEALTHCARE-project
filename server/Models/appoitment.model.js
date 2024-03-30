const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Appoitment = sequelize.define('appoitment', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
     defautValue: new Date()
    },
    time:{
      type: DataTypes.ENUM("09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"),
         allowNull: false,
         defaultValue: "09:00",
    },
    patientName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    patientEmail:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    departement: {
      type: DataTypes.ENUM("DEP1","DEP2","DEP3","DEP4"),
      allowNull: false,
      defaultValue: "DEP1",
    },
    accepted: {
      type: DataTypes.ENUM("Declined","Confirmed"),
      allowNull: false,
      defaultValue: "Declined",
    },
   
  },{
    timestamps: false
    
  });
  return Appoitment
}