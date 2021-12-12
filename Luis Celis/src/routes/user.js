const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/userCtrl');

router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.create);
router.delete('/:username', userCtrl.delete);
module.exports = router;