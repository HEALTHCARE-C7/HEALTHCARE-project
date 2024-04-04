const {Sequelize } = require("sequelize");

module.exports=(connection,DataTypes)=>{
    const User = connection.define('User', {
        user_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        FirstName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password_hash: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true, // Optional
          unique: true
        },
       
    })
    return User
}