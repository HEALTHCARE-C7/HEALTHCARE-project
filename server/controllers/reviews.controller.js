const db=require('../Models/index.js');

module.exports = {


    selectAll:async function(req,res){
        try {
            const Review= await db.Review.findAll({})
            res.status(200).send(Review)    
        } catch (error) {
            throw error    
        }   
   
    },
    
    getByDoc:async function(req,res){
        try {
            const Review= await db.Review.findAll({where:{
                doctorId:req.params.doctorId    
            }})
            res.status(200).send(Review)    
        } catch (error) {
            throw error    
        }   
   
    },
    
    addComment: async function(req,res){
        try {
            const comment= await db.Review.create(req.body)
            res.status(200).send(comment)    
        } catch (error) {
            throw error    
        }

    },
    deleteComment:async function(req,res){
        try {
            let id=req.params.id
            const comment=db.Review.destroy({where:{id:id}})
            res.json(comment)
        } catch (err) {
            throw err
        }

    }
   
   
   
   }