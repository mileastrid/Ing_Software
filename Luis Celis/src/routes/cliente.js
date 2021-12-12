const {Router} = require('express');
const router = Router();
const cliCtrl = require('../controllers/clientCtrl');

router.get('/', cliCtrl.getAll);
router.post('/', cliCtrl.insert);
router.delete('/:cedula', cliCtrl.delete);

module.exports = router;