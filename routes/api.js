const api = require("express").Router();

const monedas = require('./monedas')
const cuentas = require('./cuentas')
const movimiento = require("./movimientos")

api.use('/monedas', monedas )
api.use('/cuentas', cuentas )
api.use('/movimiento', movimiento)

module.exports = api