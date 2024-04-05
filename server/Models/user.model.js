const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const User = sequelize.define('user', {
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
    type: DataTypes.ENUM("None","General","Dental treatments","Bones treatments","Diagnosis","Cardiology","Surgery","Eye care"),
    allowNull: false,
    defaultValue: "None",
    },
    role:{
        type: DataTypes.ENUM("patient","doctor"),
        allowNull: false,
        defaultValue: "patient",    
    },
    doctorId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    }
  });
  return User
}