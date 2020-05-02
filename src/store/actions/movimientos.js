import axios from "axios";

export const fetchMovimientos = (idPeriodo) => dispatch =>{
    axios.post('http://localhost:8080/api/movimiento/', {cuenta: idPeriodo})
    .then(res => res.data)
    .then(movimientos => {
        return dispatch(receiveMovimientos(movimientos))
    })
}

export const receiveMovimientos = payload => ({
    type: 'RECEIVE_MOVIMIENTOS',
    payload
})

export const addMovimiento = (movimientoObject) => dispatch => {
    axios.post('http://localhost:8080/api/movimiento/add', movimientoObject)
    .then(res => dispatch(resultAddMovimiento))
}

export const resultAddMovimiento = payload => ({
    type: "ADDED_MOVIMIENTO",
    payload
})