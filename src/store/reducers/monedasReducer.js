const initialState = {
    monedas: [],
    monedasSeleccionadas: []
}

export function monedasReducer(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_MONEDAS':
            return {...state, monedas: action.payload}  
        default:
            return state
    }
}