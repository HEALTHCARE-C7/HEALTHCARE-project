const router = require('express').Router();


const { selectAll }=require("../controllers/availabilty.controller");

router.get("/",selectAll);

module.exports = router;
