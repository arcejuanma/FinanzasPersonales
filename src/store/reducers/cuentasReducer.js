const initialState = []

export function cuentasReducer(state = initialState, action){
    switch(action.type){
        case 'GET_CUENTAS':
            return state = action.payload
        default:
            return state
    }
}