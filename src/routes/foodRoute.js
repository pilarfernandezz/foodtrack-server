const express = require('express');
const router = express.Router();
const controller = require('../controllers/foodController')
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/food', controller.getFood);
router.get('/foodExists', controller.foodExists);
router.get('/insertBarCodeAndBatch', controller.insertBarCodeAndBatch);
router.get('/insertNewTrackingStep', controller.insertNewTrackingStep);
router.get('/insertNewIncidentWithBarCode', controller.insertNewIncidentWithBarCode);
router.get('/insertNewIncidentWithoutBarCode', controller.insertNewIncidentWithoutBarCode);
router.get('/trackFoodWithBarCode', controller.trackFoodWithBarCode);
router.get('/trackFoodWithoutBarCode', controller.trackFoodWithoutBarCode);


module.exports = router;