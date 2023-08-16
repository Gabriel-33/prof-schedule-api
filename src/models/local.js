const mongoose = require('mongoose')
const mongoConnection = require('../mongoconnection') 

const LocalSchema = new mongoose.Schema({
    local_nome: {
      type: String,
      required: true
    },
    local_numero: {
      type: Number,
      required: true
    },
    local_horario:{
      type: [{
        horario: Number,
        dia: Number,
        disciplina: String,
        professor:String,
        curso:String,
        capacidade_local:Number,
      }],
    },
  }, {collection: 'locals'})

const localModel = mongoConnection.model('Local', LocalSchema)
module.exports = localModel