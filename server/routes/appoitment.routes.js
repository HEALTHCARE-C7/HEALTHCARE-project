const router = require('express').Router();
const verifyUser = require('../middleware/VerifyUser')


const {getAllAppoitments,getAllDayAppoitment, getAllAppoitmentDoctor,getAllAppoitmentPatient,getOneByDate,addAppoitment,deleteAppoitment,updateAppoitment }=require("../controllers/appoitment.controller");

router.get("/getAllAppoitments",getAllAppoitments);
router.get("/getAllAppoitmentDoctor/:doctorId",getAllAppoitmentDoctor);
router.get("/getAllAppoitmentPatient/:patientId",getAllAppoitmentPatient);
router.get("/getAllDayAppoitment/:date",getAllDayAppoitment);
router.get("/getOneBydate/:createdAt",getOneByDate);
// router.post("/addAppoitment",verifyUser,addAppoitment);
router.post("/addAppoitment",addAppoitment);
router.delete("/deleteAppoitment/:id",deleteAppoitment);
router.patch("/updateAppoitment/:id",updateAppoitment);






module.exports = router;
