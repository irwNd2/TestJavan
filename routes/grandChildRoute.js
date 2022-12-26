const router = require('express').Router();
const GrandChildController = require('../controllers/grandChildController');

router.post('/', GrandChildController.addGrandChild);
router.put('/:id', GrandChildController.updateGrandChild);
router.delete('/:id', GrandChildController.deleteGrandChild);

module.exports = router;