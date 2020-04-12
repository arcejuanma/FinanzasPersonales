const mongoose = require('mongoose')
const { Schema } = require ("mongoose")

const Cuenta = new Schema({
    Active: {type: Boolean, default: true},
    Nombre: {type: String},
    Periodos: [{type: Schema.Types.ObjectId, ref: "Periodo"}],
    PeriodosRecurrentes: [{type: Schema.Types.ObjectId, ref: "PeriodosRecurrente"}],
    MovimientosRecurrentes: [{type: Schema.Types.ObjectId, ref: "MoviemientosRecurrente"}],
    Monedas: [{type: Schema.ObjectId, ref: "Moneda"}],
    CuentaComitente: {type: Boolean, default: false},
    Mercado: {type: String}
})

module.exports = mongoose.model("Cuenta", Cuenta)