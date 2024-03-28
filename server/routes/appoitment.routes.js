const router = require('express').Router();


const {getAllAppoitments, getAllAppoitmentDoctor,getAllAppoitmentPatient,getOneByDate,addAppoitment,deleteAppoitmentByDoctor,updateAppoitm }=require("../controllers/appoitment.controller");

router.get("/getAllAppoitments",getAllAppoitments);
router.get("/getAllAppoitmentDoctor",getAllAppoitmentDoctor);
router.get("/getAllAppoitmentPatient/:patientId",getAllAppoitmentPatient);
router.get("/getOneBydate/:createdAt",getOneByDate);
router.post("/addAppoitment",addAppoitment);
router.delete("/deleteAppoitmentByDoctor/:createdAt/:doctorId",deleteAppoitmentByDoctor);
router.patch("/updateAppoitm",updateAppoitm);






module.exports = router;
