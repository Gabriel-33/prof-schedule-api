const mongoose = require('mongoose')
const mongoConnection = require('../mongoconnection') 

const gestaoSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    },
}, {collection: 'gestaos'})

const gestaoModel = mongoConnection.model('Gestao', gestaoSchema)
module.exports = gestaoModel