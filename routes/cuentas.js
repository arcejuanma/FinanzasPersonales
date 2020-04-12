const cuentas = require("express").Router();
const Cuenta = require('../db/models/Cuenta')
const Moneda = require('../db/models/Moneda')
const Periodo = require('../db/models/Periodos')
const PeriodoRecurrente = require('../db/models/PeriodosRecurrentes')
const MovimientoRecurrente = require('../db/models/MovimientosRecurrentes')
const Concepto = require('../db/models/Concepto')

cuentas.get("/", (req,res) => {
    Cuenta.find()
    .then(data => res.send(data))
} )

cuentas.post("/crear", (req, res)=>{
    Cuenta.create({
        Nombre: req.body.nombre,
        CuentaComitente: req.body.comitente || false,
        Mercado: req.body.mercado || null
    })
    .then(data => res.send(data))
    .cathc(err => console.log(err))
})

cuentas.post("/addPeriodo", (req, res) => {
    Cuenta.findById(req.body.cuentaId).select("Monedas")
    .then(monedas =>monedas.Monedas)
    .then(monedas => monedas.map(moneda=>{
    Periodo.create({
        FechaInicio: req.body.fechaInicio,
        FechaFin: req.body.fechaFin,
        Moneda: moneda
    })
    .then(periodoCreado => Cuenta.findByIdAndUpdate(req.body.cuentaId, {$push: {Periodos: periodoCreado}}))
    })) 
    .then(cuenta => res.send(cuenta))
    .catch(err => console.log(err))
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