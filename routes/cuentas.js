const cuentas = require("express").Router();
const { CategoriaGasto, Cuenta, Moneda, MotivoMovimiento, Movimiento, MovimientoRecurrente, Periodo,
    PeriodoRecurrente, PeriodoXCuentaXMoneda, RecordatorioFinPeriodo } = require('../db/models');

cuentas.get('/', (req, res)=> {
    Cuenta.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

cuentas.post('/nuevaCuenta', (req,res) => {
    Cuenta.create(req.body)
    .then(cuenta => res.send(cuenta))
    .catch(err => err)
})
module.exports = cuentas