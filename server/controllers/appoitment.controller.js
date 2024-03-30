// DELETE THIS LINE

const db=require('../Models/index.js');

module.exports = {
    getAllAppoitments:async function(req,res){
        try {
            const appoitment= await db.Appoitment.findAll({});
            res.status(200).send(appoitment)    
        } catch (error) {
            throw error    
        }   
    },
    getAllAppoitmentDoctor:async function(req,res){
        try {
            const appoitment= await db.Appoitment.findAll({where:{doctorId:req.params.doctorId}});
            res.status(200).send(appoitment)    
        } catch (error) {
            throw error    
        }   
    },    
    getAllDayAppoitment:async function(req,res){
        try {
            const appoitment= await db.Appoitment.findAll({where:{date:req.params.date}});
            res.status(200).send(appoitment)    
        } catch (error) {
            throw error    
        }   
    },
    

    getAllAppoitmentPatient:async function(req,res){
        try {
            const appoitment= await db.Appoitment.findAll({where:{patientId:req.params.patientId}});
            res.status(200).send(appoitment)    
        } catch (error) {
            throw error    
        }   
    },

    getOneByDate:async function(req,res){
        try {
            const appoitment= await db.Appoitment.findByPk(req.params.createdAt)
            res.status(200).send(appoitment)    
        } catch (error) {
            throw error    
        }
    },
    addAppoitment: async function(req,res){
        try {
            const appoitment= await db.Appoitment.create(req.body)
            res.status(200).send(appoitment)    
        } catch (error) {
            throw error    
        }

    },
    deleteAppoitmentByDoctor:async function(req,res){
        try {
            const appoitment=db.Appoitment.destroy({where:{
                createdAt:req.params.createdAt,
                doctorId:req.params.doctorId
            }})
            res.json(appoitment)
        } catch (err) {
            throw err
        }

    },
    updateAppoitm:async function(req,res){
        try {
            const appoitment= await db.Appoitment.update(req.body,{
                where:{
                    createdAt:req.createdAt
                }
            })
            res.status(200).send(appoitment)            
        } catch (error) {
            throw error
            
        }
    }   
   
   }
   
       // getOneByDoctor:async function(req,res){
    //     try {
    //         const appoitment= await db.Appoitment.findOne({ where: { doctorId:req.param.doctorId } })
    //         res.status(200).send(doctor)    
    //     } catch (error) {
    //         throw error    
    //     }
    // },
    // getOneBypatient:async function(req,res){
    //     try {
    //         const appoitment= await db.Appoitment.findOne({ where: { patientId:req.param.patientId } })
    //         res.status(200).send(doctor)    
    //     } catch (error) {
    //         throw error    
    //     }
    // },
   
   
   