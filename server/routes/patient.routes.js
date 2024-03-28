const router = require('express').Router();
const securite=require('../middleware/doc.middleware')
const verifyUser=require('../middleware/VerifyUser')
const {   getAllPatient ,getOnePatient,addPatient ,deletePatient,updatePatient,register,login }=require("../controllers/patient.controller");

router.get("/",getAllPatient);
router.get("/user",verifyUser,getOnePatient);
router.post("/",addPatient);
router.delete("/:id",deletePatient);
router.patch("/",updatePatient);
router.post('/register',securite,register)
router.post('/login',login)

module.exports = router;
