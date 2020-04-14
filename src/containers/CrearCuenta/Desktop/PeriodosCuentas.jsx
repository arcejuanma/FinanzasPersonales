import React from 'react'
import { Styles } from './styles'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { useDispatch, useSelector } from 'react-redux'
import { fechaInicioPeriodo, fechaFinPeriodo } from '../../../store/actions/crearCuentas'

const DesktopNombreCuenta = () => {
    const cuentaPorCrear = useSelector(store => store.crearCuenta)
    const dispatch = useDispatch()

    return ( 
        <div>
        <div class="ui icon info message"><i aria-hidden="true" class="pointing right icon"></i><div class="content">
            Ingresa cual es el periodo de vigencia de la cuenta. Por ejemplo, si la cuenta es una tarjeta de crédito, el periodo actual sería las fechas entre la fechas
            de cierre de la misma. Si no lo sabes, podes chequearlo en el ultimo resumen! </div></div>

        <div class="field">
            <label>Fecha Inicio Periodo</label>
            <SemanticDatepicker  type="date" name="fechaInicio" onChange={(event, data) =>dispatch(fechaInicioPeriodo(data.value))} value={cuentaPorCrear.inicioPeriodo} placeholder='Desde' />
        </div>
        <div class="field">
            <label>Fecha Fin Periodo</label>
            <SemanticDatepicker  type="date" name="fechaFin" onChange={(event, data) =>dispatch(fechaFinPeriodo(data.value))}  value={cuentaPorCrear.finPeriodo} placeholder='Hasta' />
        </div><br/>
        </div>
    )
}

export default DesktopNombreCuenta