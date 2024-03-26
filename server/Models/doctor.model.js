const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Doctor = sequelize.define('docteur', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    email: {
      type: DataTypes.STRING,
      allowNull :false
    },
    password:{
      type: DataTypes.STRING,
      allowNull :false
    },
    gender: {
      type: DataTypes.ENUM("Male","Female","None"),
         allowNull: false,
         defaultValue: "None",
    },
    location:{
      type:DataTypes.STRING,
      allowNull:true,
      defaultValue: "None"
    },
    age:{
      type:DataTypes.INTEGER,
    allowNull:true,
  },
  phoneNumber:{
    type:DataTypes.INTEGER,
    allowNull:true,
  },
  speciality:{
      type: DataTypes.STRING,
      allowNull :true
    }
  });
  return Doctor
}