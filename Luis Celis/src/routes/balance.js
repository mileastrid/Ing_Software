const {Router} = require('express');
const router = Router();
const balCtrl = require('../controllers/balCtrl');

router.get('/materiales', balCtrl.balanceMateriales);
router.get('/pedidos', balCtrl.balancePedidos);
module.exports = router;