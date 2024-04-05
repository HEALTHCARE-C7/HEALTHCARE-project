const router = require('express').Router();
const securite=require('../middleware/doc.middleware')
const verifyUser=require('../middleware/VerifyUser')
const {getAll,getById,getOne,addDoc,updateOne,getAllDoctor,register,login,getAllByDepartement,getAllPatient}=require("../controllers/user.controller");




router.get("/",getAll);
router.get("/getAllPatient",getAllPatient);
router.get("/getAllDoc",getAllDoctor);


router.get("/addDoc",addDoc);


router.get("/docById/:id",getById);
router.get("/getDep/:speciality",getAllByDepartement);
router.get("/user",verifyUser,getOne);

router.post('/register',securite,register)
router.post('/login',login)


router.patch("/",updateOne);
module.exports = router;