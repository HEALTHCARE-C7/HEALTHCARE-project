const router = require('express').Router();


// const { selectAll }=require("../controllers/reviews.controller");

// router.get("/",selectAll);



const { addCOmment }=require("../controllers/reviews.controller");

router.get("/",addCOmment);



module.exports = router;
