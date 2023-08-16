const LocalModel = require('../models/local')

function listar_local(req, res){
    try {
        LocalModel.aggregate([
            { $group: {
            _id: "$local_nome",
            local: {
            $push: {
                numero_local: "$local_numero",
                id_curso:"$_id",
                horario: "$local_horario",
                capacidade:"$capacidade_local",
            }
            },
            count: { $sum: 1 }
            },
        
        },{
            $sort: {
            "semestre.id_curso":1,
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
const editar_local = async(req,res)=>{
    let id = req.body.id_semestre;
    let novo_horario = req.body.novo_horario;
    //console.log(req.body)
    try {
        await LocalModel.findByIdAndUpdate(id, {local_horario: novo_horario });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}
const cadastrar_local = async(req, res)=>{
    try {

        //console.log('Request Body:', req.body); 
    
        const local = new LocalModel({
            local_nome:req.body.local_nome,
            local_numero:req.body.local_numero,
            local_horario:req.body.local_horario,
        });
        await local.save();
    
        res.status(201).send('Area collection created successfully');
      } catch (error) {
        console.error('Error creating area collection:', error);
        res.status(500).send('An error occurred while creating the area collection');
      }
}

module.exports = {listar_local, cadastrar_local,editar_local}