const router = require('express').Router();
const AssetController = require('../controllers/assetController');

router.get('/', AssetController.getAssets);
router.post('/', AssetController.addAsset);
router.put('/:id', AssetController.updateAsset);
router.delete('/:id', AssetController.deleteAsset);

module.exports = router;