const router = require('express').Router();


const { selectAll,addComment ,deleteComment}=require("../controllers/reviews.controller");

router.get("/",selectAll);
router.post("/",addComment);
router.delete("/",deleteComment);


module.exports = router;