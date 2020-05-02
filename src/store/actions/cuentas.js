import axios from 'axios'

export const fetchCuentas = () => dispatch=> {
    axios.get("http://localhost:8080/api/cuentas/")
    .then(res => res.data)
    .then(cuentas => dispatch(getCuentas(cuentas)))
}

export const getCuentas = payload => ({
    type: "GET_CUENTAS",
    payload
})