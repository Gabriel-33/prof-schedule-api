const cursoModel = require('../models/curso')
const jwt = require('jsonwebtoken')


const cadastrar_curso = async(req, res)=>{
    try {

        //console.log('Request Body:', req.body); 
    
        const curso = new cursoModel({
            curso_nome:req.body.curso_nome,
            curso_numero:req.body.curso_numero
        });
        await curso.save();
    
        res.status(201).send('Area collection created successfully');
      } catch (error) {
        console.error('Error creating area collection:', error);
        res.status(500).send('An error occurred while creating the area collection');
    }
}

const editar_curso = async(req, res)=>{
    let id = req.body.id_semestre;
    let novo_horario = req.body.data.horario;
    console.log(novo_horario);
    try {
        await cursoModel.findByIdAndUpdate(id, {curso_horario: novo_horario });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}
const listar_cursos = async(req,res)=>{
    try {
        cursoModel.aggregate([
            { $group: {
            _id: "$curso_nome",
            semestre: {
            $push: {
                numero_semestre: "$curso_numero",
                id_curso:"$_id",
                horario: "$curso_horario",
            }
            },
            count: { $sum: 1 }
            },
        
        },{
            $sort: {
            "semestre.id_curso":1,
            }
        }
        ]).then(result => {
                res.json(result);
                //console.log(result)
            })
            .catch(err => {
                console.error('Error performing aggregation:', err);
                res.status(500).json({ error: 'An error occurred during aggregation' });
            });
        } catch (error) {
        console.error('Error fetching area values:', error);
        res.status(500).send('An error occurred while fetching area values');
    }
}
module.exports = {cadastrar_curso, editar_curso, listar_cursos}