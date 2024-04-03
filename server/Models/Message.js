const { Sequelize } =require( "sequelize");
module.exports=(connection,DataTypes)=>{
    const Message = connection.define('Message', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          // currentChatReceiverId: {
          //   type: DataTypes.INTEGER,
          //   allowNull: false,
          // },
        
      });
      return Message
}