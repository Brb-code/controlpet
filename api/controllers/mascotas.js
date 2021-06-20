const db = require('./../models')
const mascota = db.mascota

module.exports = {
    listar:(req, res)=>{
        mascota.findAll({})
        .then(resultado => {
            res.json({
                data:resultado
            })
        }).catch(error =>{
            console.log(error)
            res.status(400).json({mensaje:'Ups! Hubo un error.'})
        })
        
    },
    buscar:(req, res)=>{
        res.json({
            mensaje:'Lista mascota '+req.params.id
        })
    },
    insertar:(req, res)=>{
        res.json({
            mensaje:'inserta una mascota'
        })
    },
    actualizar:(req, res)=>{
        res.json({
            mensaje:'Actualiza una mascota'
        })
    },
    eliminar:(req, res)=>{
        res.json({
            mensaje:'Elimina mascota '+req.params.id
        })
    },
    masRevisiones:(req, res)=>{
        res.json({
            mensaje:'Muestra la mascota con mas revisiones'
        })
    }
}