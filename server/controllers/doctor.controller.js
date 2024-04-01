// DELETE THIS LINE
const db=require('../Models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secretfdfdsqf785897TIHFHKLVMHIFY-key';
module.exports = {
    register:async function(req,res){
     try {
        const {firstName,lastName,email,password,gender,location,age,phoneNumber,speciality}=req.body
        const saltRounds = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const newDocteur=await db.Doctor.create({firstName,lastName,email,password:passwordHash,gender,location,age,phoneNumber,speciality})
        const saveDocteur= newDocteur.toJSON()
        res.status(200).json(saveDocteur)   
     } catch (error) {  
        throw error
     }
    },
 
    login:async function(req,res){
     const {email,password}=req.body
     const docteur=await db.Doctor.findOne({where:{email}})
     if(!docteur){
        return res.status(400).json('Your Email Is Not Exist')
     }
     const clean = await bcrypt.compare(password, docteur.password)
     if(!clean){
        return res.status(400).json('Your Password Is Not Exist')
     }
     const token = jwt.sign({ id: docteur.id },  process.env.SECRET_KEY);
     console.log(token);
     const docteurData = docteur.toJSON();
     delete docteurData.password;
     res.status(200).json({ token, docteur: docteurData });
    },
    logout:async function(req, res){
        try {
            const logout=await db.Doctor.destroy(token,{where:{id:req.params.id}});
            res.status(200).send({ message: 'You have been logged out' });
        } catch (error) {
            throw error
        }
    },
    getAll:async function(req,res){
        try {
            const doctor= await db.Doctor.findAll({})
            res.status(200).send(doctor)    
        } catch (error) {
            throw error    
        }   
    },
    getAllByDepartement:async function(req,res){
        try {
            const doctor= await db.Doctor.findAll({ 
                where: { 
                    speciality:req.params.speciality
                 } })
            res.status(200).send(doctor)    
        } catch (error) {
            throw error    
        }
    },
    getOne:async function(req,res){
        try {
            const doctor= await db.Doctor.findOne({ where: { id:req.user.useerId } })
            res.status(200).send(doctor)    
        } catch (error) {
            throw error    
        }
    },
    addDoc: async function(req,res){
        try {
            const doctor= await db.Doctor.create(req.body)
            res.status(200).send(doctor)    
        } catch (error) {
            throw error    
        }

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
            const doctor= await db.Doctor.update(req.body,{
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
   
   
   
   
   