// DELETE THIS LINE
module.exports = {
    
    getAllPatient:async function(req,res){
        try {
            const patient= await db.Patient.findAll({})
            res.status(200).send(patient)    
        } catch (error) {
            throw error    
        }   
    },
    getOnePatient:async function(req,res){
        try {
            const patient= await db.Patient.findOne({ where: { name:req.param.name } })
            res.status(200).send(patient)
    
        } catch (error) {
            throw error    
        }
    },
    addPatient: async function(req,res){

    },
    deletePatient:async function(req,res){
        try {
            let id=req.params.id
            const patient=db.Patient.destroy({where:{id:id}})
            res.json(patient)
        } catch (err) {
            throw err
        }

    },
    updatePatient:async function(req,res){
        try {
            const patient= await db.Patient.update({                
                
            },{
                where:{
                    id:req.params.id
                }
            })
            res.status(200).send(patient)
    
            
        } catch (error) {
            throw error
            
        }
        

    }
   
   
   
   }
   
   
   
   
   