// DELETE THIS LINE
const db=require('../Models/index.js');
module.exports = {


    selectAllServices:async function(req,res){
        try {
            const service= await db.Service.findAll({});
            res.status(200).send(service)    
        } catch (error) {
            throw error    
        }   
    },
    selectAllServicesByDep:async function(req,res){
        try {
            const service= await db.Service.findAll({where:{departement:req.params.dep}});
            res.status(200).send(service)    
        } catch (error) {
            throw error    
        }   
    },
    addServices:async function(req,res){
        try {
            const service= await db.Service.create(req.body)
            res.status(200).send(service)    
        } catch (error) {
            throw error    
        }

    },
    
    
    
    deleteServices:async function(req,res){
        try {
            const service=db.Service.destroy({where:{
                id:req.params.id,
              
            }})
            res.json(service)
        } catch (err) {
            throw err
        }
    },
    
    
    updateServices:async function(req,res){
        try {
            const appoitment= await db.Appoitment.update(req.body,{
                where:{
                    id:req.id
                }
            })
            res.status(200).send(appoitment)            
        } catch (error) {
            throw error
            
        }
    }
   
   
   
   }
   
   
   
   
   