module.exports = {
    verificaId: (req, res, next)=>{
        console.log('Entro al middleware', new Date())
        if(req.params.id%2==0) next()
        else res.status(400).json({mensaje: 'Error el id no es par.... :('})
    }
}