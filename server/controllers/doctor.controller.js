// DELETE THIS LINE
module.exports = {
    getAll:async function(req,res){
        try {
            const doctor= await db.Doctor.findAll({})
            res.status(200).send(doctor)    
        } catch (error) {
            throw error    
        }   
    },
    getOne:async function(req,res){
        try {
            const doctor= await db.Doctor.findOne({ where: { name:req.param.name } })
            res.status(200).send(doctor)    
        } catch (error) {
            throw error    
        }
    },
    addDoc: async function(req,res){

    },
    deleteDoc:async function(req,res){
        try {
            let id=req.params.id
            const doctor=db.Doctor.destroy({where:{id:id}})
            res.json(doctor)
        } catch (err) {
            throw err
        }

    },
    updateDoc:async function(req,res){
        try {
            const doctor= await db.Doctor.update({
                
                
            },{
                where:{
                    id:req.params.id
                }
            })
            res.status(200).send(user)
    
            
        } catch (error) {
            throw error
            
        }
        

    }
   
   
   
   }
   
   
   
   
   