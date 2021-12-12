const {Router} = require('express');
const router = Router();
const authCtrl = require('../controllers/authCtrl');


router.post('/signin', authCtrl.find, authCtrl.signin);
router.post('/verify', authCtrl.verifyToken);
module.exports = router;

