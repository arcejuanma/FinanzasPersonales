import { combineReducers } from "redux"
import { monedasReducer } from './monedasReducer'
import { crearCuentasReducer } from './crearCuentasReducer'
import { cuentasReducer } from './cuentasReducer'
import { movimientosReducer } from './movimientosReducer'

const reducers = {
    monedas: monedasReducer,
    crearCuenta: crearCuentasReducer,
    cuentas: cuentasReducer,
    periodos: movimientosReducer
}

export default combineReducers(reducers)