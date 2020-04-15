const Cuenta = require('../db/models/Cuenta')
const Moneda = require('../db/models/Moneda')
const Periodo = require('../db/models/Periodos')
const PeriodoRecurrente = require('../db/models/PeriodosRecurrentes')
const MovimientoRecurrente = require('../db/models/MovimientosRecurrentes')
const Concepto = require('../db/models/Concepto')

const addPeriodo = async (cuentaId, fechaInicio, fechaFin) => {
    const cuenta = await Cuenta.findById(cuentaId).select("Monedas")
    cuenta.Monedas.map(async moneda =>{
        let periodo = await Periodo.create({
            FechaInicio: fechaInicio,
            FechaFin: fechaFin,
            Moneda: moneda
        })
        await Cuenta.findByIdAndUpdate(cuentaId, {$push: {Periodos: periodo}})
    })
    return cuenta
}

const createCuenta = async(nombreCuenta, comitente, mercado, monedas, inicioPeriodo, finPeriodo) => {
    const cuenta = await Cuenta.create({
        Nombre: nombreCuenta,
        CuentaComitente: comitente,
        Mercado: mercado,
        Monedas: monedas
    })
    return (inicioPeriodo && finPeriodo)? addPeriodo(cuenta._id, inicioPeriodo, finPeriodo): cuenta
}
module.exports = {addPeriodo, createCuenta} 