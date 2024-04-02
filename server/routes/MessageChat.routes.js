const router = require('express').Router();
const message= require('../controllers/MessageChat')

router.post('/',message.create);
router.get('/',message.getAll)
router.get('/:id',message.getOne)
router.delete('/:id',message.remove)
router.put('/:id',message.put)

module.exports = router;