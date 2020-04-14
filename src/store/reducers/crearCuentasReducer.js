const initialState = {
    monedasSeleccionadas: [],
    nombre: '',
    comitente: false,
    mercado: '',
    inicioPeriodo: '',
    finPeriodo: ''

}


export function crearCuentasReducer(state = initialState, action){
    switch(action.type){
        case 'SELECT_MONEDA':
            return {...state, monedasSeleccionadas: action.payload}
        case 'NOMBRE_CUENTA':
            return {...state, nombre: action.payload}
        case 'NOMBRE_MERCADO':
            return {...state, mercado: action.payload}
        case 'RESET_STATUS':
            return initialState
        case 'CUENTA_COMITENTE_FALSE':
            return {...state, comitente: false, mercado: ""}
        case 'CUENTA_COMITENTE_TRUE':
            return {...state, comitente: true}
        case 'SET_FIN_PERIODO':
            return {...state, finPeriodo: action.payload}
        case 'SET_INICIO_PERIODO':
            return {...state, inicioPeriodo: action.payload}
        default:
            return state
    }
}