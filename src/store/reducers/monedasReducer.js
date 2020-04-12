const initialState = {
    monedas: [],
    monedasSeleccionadas: []
}

export function monedasReducer(state = initialState, action){
    console.log(state)
    switch(action.type){
        case 'RECEIVE_MONEDAS':
            return {...state, monedas: action.payload}  
        default:
            return state
    }
}