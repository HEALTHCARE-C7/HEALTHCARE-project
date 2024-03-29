const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Availabilty = sequelize.define('availabilty', {
    date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey: true,
        defautValue: new Date() 
    },
    time: {   
        type: DataTypes.ENUM("All","09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"),
           allowNull: false,
           defautValue:"All"              
    },
    patientName: {
      type: DataTypes.STRING,
      allowNull: true,
    },   
  },{
    timestamps: false
    
  });
  return Availabilty
}