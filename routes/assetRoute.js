const router = require('express').Router();
const AssetController = require('../controllers/assetController');

router.get('/', AssetController.getAssets);


module.exports = router;