const {Router} = require('express');
const router = Router();
const pedCtrl = require('../controllers/pedidoCtrl');

router.get('/', pedCtrl.getAll);
router.post('/', pedCtrl.insert);
router.delete('/:id', pedCtrl.delete);

module.exports = router;