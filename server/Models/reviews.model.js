// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// module.exports=(sequelize,DataTypes)=>{
//   const Appoitment = sequelize.define('appoitment', {
//     createdAt:{
//         type: DataTypes.DATE,
//         allowNull: false,
//         primaryKey: true,
//         defautValue: new Date() 
//     },
//     like: {
//       type: DataTypes.INTEGER,
//     },
   
//   },{
//     timestamps: false
    
//   });
//   return Appoitment
// }
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Review = sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
        defautValue: new Date() 
    },
    comment: {
      type: DataTypes.STRING,
    },

  },{
    timestamps: false

  });
  return Review
}