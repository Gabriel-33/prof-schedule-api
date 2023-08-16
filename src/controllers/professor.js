const professorModel = require('../models/professor')
const jwt = require('jsonwebtoken')

const cadastrar_professor = async(req, res)=>{
    try {
        //console.log(req.body.prof_nome)
        const professor = new professorModel({
          prof_nome:req.body.prof_nome,
          prof_area:req.body.prof_area,
        });
        
        await professor.save();
    
        res.status(201).send("ok");
      } catch (error) {
        console.error('Error creating area collection:', error);
        res.status(500).send('An error occurred while creating the area collection');
    } 
}
const editar_professor_horario = async(req,res)=>{
    let id = req.body.id_professor;
    let novo_horario = req.body.data;
    console.log(id+" "+novo_horario);
    try {
        await professorModel.findByIdAndUpdate(id, {prof_horario: novo_horario });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

const listar_professores = async(req,res)=>{
    try {
        professorModel.aggregate([
          { $group: {
          _id: "$prof_area",
          professor: {
            $push: {
              id_professor: "$_id",
              professor_nome: "$prof_nome",
              horario_professor:"$prof_horario"
            }
          },
          count: { $sum: 1 }
          },
        
        },{
          $sort: {
            _id: 1
          }
        }
        ])
          .then(result => {
            res.json(result);
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


const listar_professor = async(req, res)=>{
    try {
        const professores = await professorModel.find({},'prof_nome');
    
        res.json(professores);
    } catch (error) {
        console.error('Error retrieving professors:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {cadastrar_professor, listar_professor,listar_professores,editar_professor_horario}