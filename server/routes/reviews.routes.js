const router = require('express').Router();


const { selectAll,addComment ,getByDoc,deleteComment}=require("../controllers/reviews.controller");

router.get("/",selectAll);
router.get("/getByDoc/:doctorId",getByDoc);

router.post("/",addComment);
router.delete("/",deleteComment);


module.exports = router;