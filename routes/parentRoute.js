const router = require('express').Router();
const ParentController = require('../controllers/parentController');

router.get('/assets/:id', ParentController.getAssetPrice)
router.post('/', ParentController.addParent);
router.put('/:id', ParentController.updateParent);
router.delete('/:id', ParentController.deleteParent);

module.exports = router;