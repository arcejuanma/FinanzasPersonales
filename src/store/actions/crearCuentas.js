import axios from "axios";

export const selectMoneda = payload => (
    console.log("hola",payload),
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

export const cuentaComitente = data => dispatch => (
    data?dispatch(cuentaComitenteTrue()):dispatch(cuentaComitenteFalse())
)

export const cuentaComitenteFalse = () => (
    {
        type: "CUENTA_COMITENTE_FALSE",
    }
)

export const cuentaComitenteTrue = () => (
    {
        type: "CUENTA_COMITENTE_TRUE"
    }
)

export const mercado = payload => (
    {
        type: 'NOMBRE_MERCADO',
        payload
    }
)

export const crearCuenta = data => dispatch =>{
    axios.post('http://localhost:8080/api/cuentas/crear', data )
    .then(res => res.data)
    .then(() => dispatch(limpiarEstado()))
}

export const limpiarEstado = ()  => (
    {
        type: 'RESET_STATUS'
    }
)

export const fechaInicioPeriodo = (payload) => (
    {
        type: "SET_INICIO_PERIODO",
        payload
    }
)

export const fechaFinPeriodo = (payload) => (
    {
        type: "SET_FIN_PERIODO",
        payload
    }
)