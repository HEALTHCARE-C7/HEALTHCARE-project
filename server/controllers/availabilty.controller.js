const db=require('../Models/index.js');

// DELETE THIS LINE
module.exports = {


    getAllAvailability:async function(req,res){
        try {
            const availabilty= await db.Availabilty.findAll({});
            res.status(200).send(availabilty)    
        } catch (error) {
            throw error    
        }
   },
   addAvailability:async function(req,res){
    try {
        const availabilty= await db.Availabilty.create(req.body);
        res.status(200).send(availabilty)    
    } catch (error) {
        throw error    
    }
},


}
   
   
   
   
   