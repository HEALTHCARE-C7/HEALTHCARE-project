const router = require('express').Router();


const { selectAll }=require("../controllers/appoitment.controller");

router.get("/",selectAll);

module.exports = router;
