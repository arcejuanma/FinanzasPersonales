import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { nombreCuenta, cuentaComitente, mercado } from '../../../store/actions/crearCuentas'

const DesktopNombreCuenta = () => {
    const cuentaPorCrear = useSelector(store => store.crearCuenta)
    const dispatch = useDispatch()

    console.log(cuentaPorCrear)
    return ( 
        <div>
        <div class="ui icon info message"><i aria-hidden="true" class="pointing right icon"></i><div class="content">
            Primero escribí el nombre de tu nueva cuenta. Esto te permitira identificarla facilmente en el futuro:</div></div>
                <div class="field">
                    <label>Nombre de la Cuenta</label>
                    <input name="nombre" onChange={evt => dispatch(nombreCuenta(evt.target.value))} value={cuentaPorCrear.nombre} placeholder='Nombre' />
                </div>
                <div class="field" style={{display: "flex", alignItems:"initial"}}>
                <label>Es cuenta comitente</label>
                <div style={{display: "flex"}}>
                <Checkbox style={{paddingLeft: "15%"}}onChange={(evt, data) => dispatch(cuentaComitente(data.checked))} toggle checked={cuentaPorCrear.comitente}/>
                </div>
                </div>
                <div style={{marginBottom:"2%"}}>
                {cuentaPorCrear.comitente?<div>
                    <input name="mercado" onChange={evt => dispatch(mercado(evt.target.value))} value={cuentaPorCrear.mercado} placeholder='Mercado' />
                </div>:""}
                </div>
            
        </div>
    )
}

export default DesktopNombreCuenta