const router = require('express').Router();


const { selectAllServices,selectAllServicesByDep,addServices,deleteServices,updateServices }=require("../controllers/service.controller");

router.get("/",selectAllServices);
router.get("/:dep",selectAllServicesByDep);
router.post("/",addServices);
router.delete("/:id",deleteServices);
router.patch("/:id",updateServices);






module.exports = router;
