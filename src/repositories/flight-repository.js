const CrudRespository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRespository {
    constructor() {
        super(Flight);
    }
}

module.exports = FlightRepository;