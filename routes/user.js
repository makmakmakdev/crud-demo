const router = require('express').Router();
const controller = require('../controllers/Controller');

router.get('/', controller.read);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.findOne);

module.exports = router;