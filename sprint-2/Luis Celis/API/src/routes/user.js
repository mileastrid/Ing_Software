const {Router} = require('express');
const router = Router();
const userCtrl = require('../controllers/userCtrl');

router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.create);
module.exports = router;