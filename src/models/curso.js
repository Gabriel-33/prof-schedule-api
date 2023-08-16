const mongoose = require('mongoose')
const mongoConnection = require('../mongoconnection') 

const CursoSchema = new mongoose.Schema({
    curso_nome: {
      type: String,
      required: true
    },
    curso_numero: {
      type: Number,
      required: true
    },
    curso_horario:{
      type: [{
        horario: Number,
        dia: Number,
        disciplina: String,
        professor:String
      }],
    }
  }, {collection: 'cursos'})

const cursoModel = mongoConnection.model('Curso', CursoSchema)
module.exports = cursoModel