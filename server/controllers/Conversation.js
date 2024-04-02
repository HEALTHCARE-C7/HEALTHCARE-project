const db=require('../Models/index');

module.exports = {
    create: async function(req,res){
        try {
            const post=await db.Conversation.create(req.body)
            res.status(200).send(post)
        } catch (error) {
            throw error
        }
    },
    getAll: async function(req,res){
        try {
            const get=await db.Conversation.findAll({})
            res.status(200).send(get)
        } catch (error) {
            throw error
        }
    },
    getOne: async function(req,res){
        try {
            const find=await db.Conversation.findOne({where:{id:req.params.id}})
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