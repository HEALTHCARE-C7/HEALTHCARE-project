const router = require('express').Router();


const { selectAll }=require("../controllers/reviews.controller");

router.get("/",selectAll);

module.exports = router;
