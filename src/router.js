var express = require('express');
var router = express.Router();
const cursoRouter = require('./routes/curso')
const placeRouter = require('./routes/local')
const professorRouter = require('./routes/professor')
const gestaoRouter = require('./routes/gestao')
const gestaoArea = require('./routes/area')

/* router.use('/user', userRouter)
router.use('/teatcher', teatcherRouter)
*/
router.use('/local', placeRouter)
router.use('/curso', cursoRouter)
router.use('/professor', professorRouter)
router.use('/gestao', gestaoRouter)
router.use('/area', gestaoArea)
module.exports = router