const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

//console.log('inside airplane routes');

// api/v1/airplanes   POST
router.post('/', 
                AirplaneMiddlewares.validateCreateRequest,
                AirplaneController.createAirplane);

// api/v1/airplanes   GET
router.get('/', 
                AirplaneController.getAirplanes);

module.exports = router;