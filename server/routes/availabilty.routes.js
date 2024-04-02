const router = require('express').Router();


const { getAllAvailability,addAvailability }=require("../controllers/availabilty.controller");

router.get("/getAllAvailability",getAllAvailability);
router.post("/addAvailability",addAvailability);


module.exports = router;
