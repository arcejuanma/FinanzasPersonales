const mongoose = require('mongoose')
const { Schema } = require ("mongoose")

const Movimiento = new Schema({
   Concepto: {type: Schema.Types.ObjectId, ref: "Concepto"},
   Monto: {type: Number},
   Fecha: {type: Date},
   Descripcion : {type: String}
})

module.exports = mongoose.model("Movimiento", Movimiento)