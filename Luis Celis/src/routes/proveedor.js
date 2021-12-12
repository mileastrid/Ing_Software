const {Router} = require('express');
const router = Router();
const provCtrl = require('../controllers/provCtrl');

router.get('/', provCtrl.getAll);
router.post('/', provCtrl.insert);
router.delete('/:cedula', provCtrl.delete);

module.exports = router;