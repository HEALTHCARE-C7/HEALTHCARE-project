const router = require('express').Router();


const {   getAllPatient ,getOnePatient,addPatient ,deletePatient,updatePatient }=require("../controllers/patient.controller");

router.get("/",getAllPatient);
router.get("/:name",getOnePatient);
router.post("/",addPatient);
router.delete("/:id",deletePatient);
router.patch("/",updatePatient);


module.exports = router;
