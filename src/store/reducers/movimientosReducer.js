const initialState = []

export function movimientosReducer(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_MOVIMIENTOS':
            return state = action.payload 
        default:
            return state
    }
}