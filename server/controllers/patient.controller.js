// DELETE THIS LINE
const db=require('../Models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');
module.exports = {
    register:async function(req,res){
        try {
           const {firstName,lastName,email,password,gender,location,age,phoneNumber}=req.body
           const saltRounds = await bcrypt.genSalt();
           const passwordHash = await bcrypt.hash(password, saltRounds);
           const newPatient=await db.Patient.create({firstName,lastName,email,password:passwordHash,gender,location,age,phoneNumber})
           const savePatient= newPatient.toJSON()
           res.status(200).json(savePatient)   
        } catch (error) {
           throw error
        }
       },
       login:async function(req,res){
        const {email,password}=req.body
        const patient=await db.Patient.findOne({where:{email}})
        if(!patient){
           return res.status(400).json('Your Email Is Not Exist')
        }
        const clean = await bcrypt.compare(password, patient.password)
        if(!clean){
           return res.status(400).json('Your Password Is Not Exist')
        }
        const token = jwt.sign({ id: patient.id }, process.env.SECRET_KEY);
        const patientData = patient.toJSON();
        delete patientData.password;
        res.status(200).json({ token, patient: patientData });
       },
    
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
            const patient= await db.Patient.findOne({ where: { id:req.user.useerId } })
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
   
   
   
   
   