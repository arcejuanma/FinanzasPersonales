import axios from "axios";

export const selectMoneda = payload => (
    {
        type: 'SELECT_MONEDA',
        payload
    }
)

export const nombreCuenta = payload => (
    {
        type: 'NOMBRE_CUENTA',
        payload
    }
)

export const crearCuenta = data => dispatch =>{
    console.log(data)
    axios.post('http://localhost:8080/api/cuentas/nuevaCuenta', {Nombre: "Hola2"} )
    .then(res => res.data)
    .then(() => dispatch(limpiarEstado()))
}

export const limpiarEstado = ()  => (
    {
        type: 'RESET_STATUS'
    }
)

