const router = require('express').Router();
const securite=require('../middleware/doc.middleware')
const verifyUser=require('../middleware/VerifyUser')
const { getAll,getOne,addDoc ,deleteDoc,updateDoc,register,login}=require("../controllers/doctor.controller");

router.get("/",getAll);
router.get("/user",verifyUser,getOne);
router.post("/",addDoc);
router.delete("/:id",deleteDoc);
router.patch("/",updateDoc);
router.post('/register',securite,register)
router.post('/login',login)

module.exports = router;
