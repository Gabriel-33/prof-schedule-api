const areaModel = require('../models/area')
const jwt = require('jsonwebtoken')

const cadastrar_area = async(req, res)=>{
    try {
  
        console.log('Request Body:', req.body); // Log the entire request body

        // Create a dummy document in the Area collection to trigger its creation
        const area = new areaModel({
            area_nome:req.body.area_nome
        });
        await area.save();

        res.status(201).send('Area collection created successfully');
    } catch (error) {
        console.error('Error creating area collection:', error);
        res.status(500).send('An error occurred while creating the area collection');
    }
}

const editar_area = async(req, res)=>{
    let id = req.body.id_semestre;
    let novo_horario = req.body.data.horario;
    //console.log(novo_horario);
    try {
        await areaModel.findByIdAndUpdate(id, {curso_horario: novo_horario });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}
const listar_areas = async(req,res)=>{
    try {
      
        const areas = await areaModel.find();
    
        console.log('Area Collection:');    
        res.json(areas);
    } catch (error) {
        console.error('Error fetching area values:', error);
        res.status(500).send('An error occurred while fetching area values');
    }
}
module.exports = {cadastrar_area, editar_area, listar_areas}