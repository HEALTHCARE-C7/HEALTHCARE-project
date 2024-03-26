const router = require('express').Router();


const { getAll,getOne,addDoc ,deleteDoc,updateDoc}=require("../controllers/doctor.controller");

router.get("/",getAll);
router.get("/:name",getOne);
router.post("/",addDoc);
router.delete("/:id",deleteDoc);
router.patch("/",updateDoc);


module.exports = router;
