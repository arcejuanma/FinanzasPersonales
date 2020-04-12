const mongoose = require('mongoose')
const { Schema } = require ("mongoose")

const MoviemientosRecurrente = new Schema({
    Active: {type: Boolean, default: true},
    Monto: {type: Number},
    Moneda: {type: Schema.Types.ObjectId, ref: "Moneda"},
    Concepto: {type: Schema.Types.ObjectId, ref: "Concepto"},
    FrecuenciaDias: {type: Number},
    FrecuenciaMeses: {type: Number},
    Repeticiones: {type: Number},
    FechaInicio: {type: Date},
    FechaFin: {type: Date}
})

module.exports = mongoose.model("MoviemientosRecurrente", MoviemientosRecurrente)