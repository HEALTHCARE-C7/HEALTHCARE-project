const router = require('express').Router();
const conversation= require('../controllers/Conversation')

router.post('/',conversation.create);
router.get('/',conversation.getAll)
router.get('/:id',conversation.getOne)
router.delete('/:id',conversation.remove)
router.put('/:id',conversation.put)

module.exports = router;