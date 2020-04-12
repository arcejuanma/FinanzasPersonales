const api = require("express").Router();

const monedas = require('./monedas')
const cuentas = require('./cuentas')

api.use('/monedas', monedas )
api.use('/cuentas', cuentas )


module.exports = api