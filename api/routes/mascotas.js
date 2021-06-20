const Express = require('express')
let route = Express.Router()
const cntr = require('./../controllers/mascotas')
const midle = require('./../utils/middlelware')
const esquemaValidacion = require('./../validations/mascotas')
const { validate } = require('express-validation')


route.get('', cntr.listar)
route.get('/:id', midle.verificaId, midle.verificaId, midle.verificaId, midle.verificaId, midle.verificaId, midle.verificaId, midle.verificaId, midle.verificaId, midle.verificaId, cntr.buscar)
route.post('', validate(esquemaValidacion.insertValidation,{},{}) ,cntr.insertar)
route.put('/:id', cntr.actualizar)
route.delete('/:id', cntr.eliminar)
route.post('/mas-revisiones', cntr.masRevisiones)

module.exports = route