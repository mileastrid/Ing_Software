const {Router} = require('express');
const router = Router();
const prodCtrl = require('../controllers/prodCtrl');

router.get('/', prodCtrl.getAll);
router.post('/filter', prodCtrl.getByfilter);
router.post('/', prodCtrl.insert);
router.put('/', prodCtrl.update);
router.delete('/', prodCtrl.delete);

module.exports = router;