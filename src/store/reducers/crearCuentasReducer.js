const initialState = {
    monedasSeleccionadas: [],
    nombreCuenta: ''
}


export function crearCuentasReducer(state = initialState, action){
    console.log(state)
    switch(action.type){
        case 'SELECT_MONEDA':
            return {...state, monedasSeleccionadas: action.payload}
        case 'NOMBRE_CUENTA':
            return {...state, nombreCuenta: action.payload}
        case 'RESET_STATUS':
            return initialState
        default:
            return state
    }
}