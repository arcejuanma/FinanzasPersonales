const cuentas = require("express").Router();
const Cuenta = require('../db/models/Cuenta')
const Moneda = require('../db/models/Moneda')
const Periodo = require('../db/models/Periodos')
const PeriodoRecurrente = require('../db/models/PeriodosRecurrentes')
const MovimientoRecurrente = require('../db/models/MovimientosRecurrentes')
const Concepto = require('../db/models/Concepto')
const utils = require('../utils/crearCuenta')

cuentas.get("/", (req,res) => {
    Cuenta.find()
    .then(data => res.send(data))
} )

cuentas.post("/crear", async (req, res)=>{
    utils.createCuenta(req.body.nombre, req.body.comitente, req.body.mercado, req.body.monedasSeleccionadas, req.body.inicioPeriodo, req.body.finPeriodo)
    .then(cuenta =>res.send(cuenta))
    .catch(err => err)
})

cuentas.post("/addPeriodo", async (req, res) => {
    const result = await utils.addPeriodo(req.body.cuentaId, req.body.fechaInicio, req.body.fechaFin)
    res.send(result)
})

cuentas.post("/addPeriodoRecurrente", (req, res)=>{
    PeriodoRecurrente.create({
    FrecuenciaMeses: req.body.frecuenciaMeses,
    FrecuenciaDias: req.body.frecuenciaDias,
    FechaInicio: req.body.fechaInicio,
    FechaFin: req.body.fechaFin || null
    })
    .then(periodoRecurrenteCreado => Cuenta.findByIdAndUpdate(req.body.cuentaId, {$push: {PeriodosRecurrentes: periodoRecurrenteCreado}}))
    .then(cuenta => res.send(cuenta))
    .catch(err => console.log(err))
})

cuentas.post("/addMovimientoRecurrente", (req, res) => {
    let monedaEsquema = []
    let conceptoEsquema = []
    Moneda.findById(req.body.monedaId)
    .then(moneda => monedaEsquema = moneda)
    .then(()=> Concepto.findById(req.body.conceptoId))
    .then(concepto => conceptoEsquema = concepto)
    .then(()=>{
        MovimientoRecurrente.create({
            Monto: req.body.monto,
            Moneda: monedaEsquema,
            Concepto: conceptoEsquema,
            FrecuenciaDias: req.body.frecuenciaDias,
            FrecuenciaMeses: req.body.frecuenciaMeses,
            Repeticiones: req.body.repeticiones,
            FechaInicio: req.body.fechaInicio,
            FechaFin: req.body.fechaFin
        })
    })
})

cuentas.post("/addMoneda", (req, res)=>{
    let monedaModel = []
    Moneda.findOne({Nombre: req.body.nombreMoneda})
    .then(data => monedaModel = data)
    .then(() => Cuenta.findByIdAndUpdate(req.body.cuentaId, {$push: {Monedas: monedaModel}}))
    .then(cuenta => res.send(cuenta))
    .catch(err => console.log(err))
})


module.exports = cuentas