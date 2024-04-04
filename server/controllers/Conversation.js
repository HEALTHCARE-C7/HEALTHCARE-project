const db=require('../Models/index');

module.exports = {
    createMessage: async function(req,res){
        
        try {
            const post=await db.Message.create(req.body)
            res.status(200).send(post)
        } catch (error) {
            throw error
        }
    },
    getRoomsByUserId: async function(req,res){
        try {
            const get=await db.Room.findAll({})
            res.status(200).send(get)
        } catch (error) {
            throw error
        }
    },
    getAllMessageByRoomId: async function(req,res){
        try {
            const find=await db.Message.findAll({where:{roomId:req.params.roomId}})
            res.status(200).send(find)
        } catch (error) {
            throw error
        }
    },
    put:async function (req, res) {
        try {
            const update=await db.Conversation.update(req.body,{
                where:{
                    id:req.params.id
                }
            })
            res.status(200).send(update)
        } catch (error) {
            throw error
        }
    },
    remove:async function(req, res) {
        try {
            const remove=await db.Message.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.status(200).send(remove)
        } catch (error) {
            throw error
        }
    }

}