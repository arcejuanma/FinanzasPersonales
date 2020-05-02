const mongoose = require('mongoose')
const { Schema } = require ("mongoose")

const Periodo = new Schema({
    Active: {type: Boolean, default: true},
    Movimientos: [{type: Schema.Types.ObjectId, ref: "Movimiento"}],
    Moneda: {type: Schema.Types.ObjectId, ref: "Moneda"},
    FechaInicio: {type: Date},
    FechaFin: {type: Date},
    Saldo: {type: Number, default: 0}
})

module.exports = mongoose.model("Periodo", Periodo)