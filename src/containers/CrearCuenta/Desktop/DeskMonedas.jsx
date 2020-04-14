import React, {useEffect, useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Styles } from './styles'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions/monedas'
import { selectMoneda } from '../../../store/actions/crearCuentas'

const DesktopAddMoneda = () => {
    const monedas = useSelector(store => store.monedas)
    const cuentaPorCrear = useSelector(store => store.crearCuenta)
    const dispatch = useDispatch()
    const [monedaSeleccionada, seleccionarMoneda] = useState(cuentaPorCrear.monedasSeleccionadas || [])
    
    useEffect(() => {
        dispatch(selectMoneda(monedaSeleccionada))
    }, [monedaSeleccionada])

    const  handleChange =   (event, result) => {
        console.log(result)
        seleccionarMoneda(result.value)   
    }
    const monedaOptions = _.map(monedas.monedas, (moneda, index) => ({
        key: moneda._id,
        text: moneda.Nombre,
        value:  moneda,
      }))    
    return ( 
        <div>
            <div class="ui icon info message"><i aria-hidden="true" class="pointing right icon"></i><div class="content">
            Selecciona las monedas con las que opera la cuenta. En caso de que no lo sepas ¡No te preocupes!, podrás agregarlas más tarde.</div></div>
            <label>Monedas asociadas:</label>
            <Dropdown
                placeholder='Monedas'
                fluid
                multiple
                search
                selection
                onChange={handleChange}
                options={monedaOptions}
                value={cuentaPorCrear.monedasSeleccionadas}
            />
            <br/>
        </div>
    )
}

export default DesktopAddMoneda