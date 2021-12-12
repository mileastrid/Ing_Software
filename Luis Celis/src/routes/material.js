const {Router} = require('express');
const router = Router();
const matCtrl = require('../controllers/materialCtrl');

router.get('/', matCtrl.getAll);
router.post('/', matCtrl.insert);
router.delete('/:codigo', matCtrl.delete);
module.exports = router;