const Joi = require('joi')

module.exports = Joi.object({
    nome: Joi.string()
        .min(5)
        .max(20)
        .required(),

    idade: Joi.number()
        .min(18)
        .max(120)
        .required()
})
