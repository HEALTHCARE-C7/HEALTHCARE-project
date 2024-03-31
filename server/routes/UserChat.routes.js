const router = require('express').Router();

const user=require('../controllers/UserController');

router.post('/',user.create)
router.get('/',user.getAll)
router.get('/:id',user.getOne)
router.put('/:id',user.put)
router.delete('/:id',user.remove)

module.exports = router;