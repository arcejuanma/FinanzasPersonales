const mongoose = require('mongoose')
const { Schema } = require ("mongoose")

const Concepto = new Schema({
   Descripcion : {type: String}
})

module.exports = mongoose.model("Concepto", Concepto)