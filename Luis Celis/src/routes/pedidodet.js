const {Router} = require('express');
const router = Router();
const pedDetCtrl = require('../controllers/peddetCtrl');

router.get('/', pedDetCtrl.getAll);
router.post('/', pedDetCtrl.insert);
router.delete('/:id', pedDetCtrl.delete);

module.exports = router;