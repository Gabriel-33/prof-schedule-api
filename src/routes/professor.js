const express = require('express')
const professorRouter = express.Router()
const jwt = require('jsonwebtoken')
const {cadastrar_professor, listar_professor,listar_professores,editar_professor_horario} = require('../controllers/professor.js')


function auth(req, res, next){
    console.log(req.headers)
    try{
        jwt.verify(req.headers.authorization, process.env.secret_key)
        next()
    }
    catch{
        res.status(401).send('Invalid Token')
    }
}

professorRouter.get('/listar_professores',auth, (req, res) => {
    listar_professores(req, res)
})

professorRouter.get('/listar_professor',auth, (req, res) => {
    listar_professor(req, res)
})

professorRouter.put('/editar_professor_horario',auth, (req, res) => {
    editar_professor_horario(req, res)
})

professorRouter.post('/cadastrar_professor',auth, (req, res) => {
    cadastrar_professor(req, res)
})

module.exports = professorRouter