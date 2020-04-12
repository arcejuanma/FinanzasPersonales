import { combineReducers } from "redux"
import { monedasReducer } from './monedasReducer'
import { crearCuentasReducer } from './crearCuentasReducer'

const reducers = {
    monedas: monedasReducer,
    crearCuenta: crearCuentasReducer
}

export default combineReducers(reducers)