const router = require('express').Router();
const verifyUser = require('../middleware/VerifyUser')

const {getAllAppoitments,getAllDayAppoitment, getAllAppoitmentDoctor,getAllAppoitmentPatient,getOneByDate,addAppoitment,deleteAppoitmentByDoctor,updateAppoitm }=require("../controllers/appoitment.controller");

router.get("/getAllAppoitments",getAllAppoitments);
router.get("/getAllAppoitmentDoctor/:doctorId",getAllAppoitmentDoctor);
router.get("/getAllAppoitmentPatient/:patientId",getAllAppoitmentPatient);
router.get("/getAllDayAppoitment/:date",getAllDayAppoitment);
router.get("/getOneBydate/:createdAt",getOneByDate);
router.post("/addAppoitment",verifyUser,addAppoitment);
router.delete("/deleteAppoitmentByDoctor/:createdAt/:doctorId",deleteAppoitmentByDoctor);
router.patch("/updateAppoitm",updateAppoitm);






module.exports = router;
