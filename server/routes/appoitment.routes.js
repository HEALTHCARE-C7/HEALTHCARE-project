const router = require('express').Router();


const {getAllAppoitments,getAllDayAppoitment, getAllAppoitmentDoctor,getAllAppoitmentPatient,getOneByDate,addAppoitment,deleteAppoitment,updateAppoitm }=require("../controllers/appoitment.controller");

router.get("/getAllAppoitments",getAllAppoitments);
router.get("/getAllAppoitmentDoctor/:doctorId",getAllAppoitmentDoctor);
router.get("/getAllAppoitmentPatient/:patientId",getAllAppoitmentPatient);
router.get("/getAllDayAppoitment/:date",getAllDayAppoitment);
router.get("/getOneBydate/:createdAt",getOneByDate);
router.post("/addAppoitment",addAppoitment);
router.delete("/deleteAppoitment/:id",deleteAppoitment);
router.patch("/updateAppoitm",updateAppoitm);






module.exports = router;
