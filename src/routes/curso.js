const express = require('express')
const courseRouter = express.Router()
const jwt = require('jsonwebtoken')
const {cadastrar_curso, editar_curso, listar_cursos} = require('../controllers/curso.js')


function auth(req, res, next){
    try{
        jwt.verify(req.headers.authorization, process.env.secret_key)
        next()
    }
    catch{
        res.status(401).send('Invalid Token')
    }
}

courseRouter.get('/listar_curso',auth, (req, res) => {
    listar_cursos(req, res)
});

courseRouter.post('/cadastrar_curso',auth, (req, res) => {
    cadastrar_curso(req, res)
});

courseRouter.put('/editar_curso',auth, (req, res) => {
    editar_curso(req, res)
});


module.exports = courseRouter