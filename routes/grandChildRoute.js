const router = require('express').Router();
const GrandChildController = require('../controllers/grandChildController');

router.get('/assets/:id', GrandChildController.getAssetPrice)
router.post('/', GrandChildController.addGrandChild);
router.put('/:id', GrandChildController.updateGrandChild);
router.delete('/:id', GrandChildController.deleteGrandChild);

module.exports = router;