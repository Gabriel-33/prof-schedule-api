const mongoose = require('mongoose')
const mongoConnection = require('../mongoconnection') 

const profSchema = new mongoose.Schema({
    prof_nome: {
      type: String,
      required: true
    },
    prof_area: {
      type: Number,
      required: true
    },
    prof_horario: {
      type: [{
        horario: Number,
        dia: Number,
        disciplina: String
      }],
      required: false
  },
  }, {collection: 'professors'})

const professorModel = mongoConnection.model('Professor', profSchema)
module.exports = professorModel