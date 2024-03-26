const router = require('express').Router();


const { selectAll }=require("../controllers/user.controller");

router.get("/",selectAll);

module.exports = router;
