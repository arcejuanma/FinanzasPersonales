const moneda = require("express").Router();
const { CategoriaGasto, Cuenta, Moneda, MotivoMovimiento, Movimiento, MovimientoRecurrente, Periodo,
     PeriodoRecurrente, PeriodoXCuentaXMoneda, RecordatorioFinPeriodo } = require('../db/models');

moneda.get('/', (req, res) => {
    Moneda.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

moneda.post('/crear', (req, res) => {
    console.log(req.body)
    Moneda.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

moneda.delete('/borrar', (req, res) => {
    Moneda.update({Activo: false}, {where: {id: req.body.id}})
    .then(() => res.send(`Success`))
    .catch (err => console.log(err))
})

module.exports = moneda