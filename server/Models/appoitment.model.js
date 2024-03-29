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
      type: DataTypes.STRING,
      allowNull: true,
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defautValue:false
    },
   
  },{
    timestamps: false
    
  });
  return Appoitment
}