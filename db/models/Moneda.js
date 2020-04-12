const mongoose = require('mongoose')
const { Schema } = require ("mongoose")

const Moneda = new Schema({
    Active: {type: Boolean, default: true},
    Nombre: {type: String},
    Simbolo: {type: String},
})

module.exports = mongoose.model("Moneda", Moneda)