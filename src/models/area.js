const mongoose = require('mongoose')
const mongoConnection = require('../mongoconnection') 

const areaSchema = new mongoose.Schema({
    area_nome: {
      type: String,
      required: true
    },
  }, {collection: 'areas'})

const areaModel = mongoConnection.model('Area', areaSchema)
module.exports = areaModel