import axios from "axios";

export const fetchMonedas = () => dispatch =>{
    axios.get('http://localhost:8080/api/monedas')
    .then(res => res.data)
    .then(monedas => {
        return dispatch(receiveMonedas(monedas))
    })
}

export const receiveMonedas = payload => (
    {
        type: 'RECEIVE_MONEDAS',
        payload
    }
)

