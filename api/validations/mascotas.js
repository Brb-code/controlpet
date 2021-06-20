const Joi = require('joi')
module.exports = {
    insertValidation:{
        body: Joi.object({
            Usuario:Joi.string().required(),
            Contrasenia:Joi.string().required(),
            Email:Joi.string().email().required()
        })
    }
}