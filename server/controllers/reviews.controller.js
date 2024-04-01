const db=require('../Models/index.js');

module.exports = {


    addCOmment:async function(req,res){
        try {
            const Review= await db.Review.findAll({})
            res.status(200).send(Review)
        } catch (error) {
            throw error
        }

    }



   }