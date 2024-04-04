const router = require('express').Router();
const securite=require('../middleware/doc.middleware')
const verifyUser=require('../middleware/VerifyUser')
const { getAll,docById,getOne,addDoc ,deleteDoc,updateDoc,register,login,getAllByDepartement}=require("../controllers/doctor.controller");




router.get("/",getAll);
router.get("/docById/:id",docById);

router.get("/getDep/:speciality",getAllByDepartement);

router.get("/user",verifyUser,getOne);
router.post("/",addDoc);
// router.delete("/:id",deleteDoc);
router.patch("/",updateDoc);
router.post('/register',securite,register)
router.post('/login',login)
// router.delete('/logout/:token',logout)
module.exports = router;
