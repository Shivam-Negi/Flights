const express = require('express')

const router = express.Router()

const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

//console.log('inside v1 routes');

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);

router.get('/info', InfoController.info)

module.exports = router;