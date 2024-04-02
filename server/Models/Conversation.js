module.exports = (sequelize,DataTypes) => {
    sequelize.define("conversation", {
      users: {
        type: DataTypes.STRING,
        unique: true,
      },
    });
    
  };