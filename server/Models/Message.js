const { Sequelize } =require( "sequelize");
module.exports=(connection,DataTypes)=>{
    const Message = connection.define('Message', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
          },
       
        
      });
      return Message
}