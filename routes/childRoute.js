const router = require('express').Router()
const ChildController = require('../controllers/childController')

router.get('/assets/:id', ChildController.getAssetPrice)
router.post('/', ChildController.addChild)
router.put('/:id', ChildController.updateChild)
router.delete('/:id', ChildController.deleteChild)



module.exports = router