const mongoose = require('mongoose')
const { Schema } = require ("mongoose")

const PeriodoRecurrente = new Schema({
    Active: {type: Boolean, default: true},
    FrecuenciaMeses: {type: Number},
    FrecuenciaDias: {type: Number},
    FechaInicio: {type: Date},
    FechaFin: {type: Date}
})

module.exports = mongoose.model("PeriodoRecurrente", PeriodoRecurrente)