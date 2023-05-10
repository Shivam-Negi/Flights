const express = require('express')

const router = express.Router()

const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./airplane-routes');

//console.log('inside v1 routes');

router.use('/airplanes', airplaneRoutes);

router.get('/info', InfoController.info)

module.exports = router;