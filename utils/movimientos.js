const Movimiento = require('../db/models/Movimiento')
const Cuenta = require('../db/models/Cuenta')
const Periodo = require('../db/models/Periodos')



const addMovimientoXMonedaXPeriodoXCuenta = async (payload, idPeriodo)=>{
    const findPeriodo = await Periodo.findById(idPeriodo)
    const saldo = findPeriodo.Saldo + payload.monto
    const movimiento = await Movimiento.create({
        Concepto: payload.concepto,
        Monto: payload.monto,
        Fecha: payload.fecha,
        Descripcion : payload.descripcion
    })
    const periodo = await Periodo.findByIdAndUpdate(idPeriodo,  {$push: {Movimientos: movimiento}, Saldo: saldo}).populate("Movimientos")
    return periodo
}

const getMovimientosXPeriodoXCuenta = async (idPeriodo)=>{
    const periodo = await Periodo.findById(idPeriodo).populate("Movimientos").populate("Moneda")
    return periodo
}

const getMovimientosXCuenta = async (idCuenta) =>{
    const cuenta = await Cuenta.findById(idCuenta)
    return Promise.all(cuenta.Periodos.map(async idPeriodo=> await getMovimientosXPeriodoXCuenta(idPeriodo) ))
}

const getAllMovimientosXCuenta = (idCuenta) =>{

}

const deleteMovimiento = async (payload) =>{
    return await Movimiento.findByIdAndDelete(payload)
}

const updateMovimientoXCuenta = (idCuenta, idPeriodo, idMovimiento) => {}

module.exports = {addMovimientoXMonedaXPeriodoXCuenta, getMovimientosXPeriodoXCuenta, deleteMovimiento, getMovimientosXCuenta}
