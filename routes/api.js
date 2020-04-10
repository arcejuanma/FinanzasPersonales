const api = require("express").Router();
const { CategoriaGasto, Cuenta, Moneda, MotivoMovimiento, Movimiento, MovimientoRecurrente, Periodo,
     PeriodoRecurrente, PeriodoXCuentaXMoneda, RecordatorioFinPeriodo } = require('../db/models');
const monedas = require('./monedas')
const cuentas = require('./cuentas')

api.use('/monedas', monedas )
api.use('/cuentas', cuentas )


module.exports = api