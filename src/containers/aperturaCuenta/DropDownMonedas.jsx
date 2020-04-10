import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions/monedas'
import { selectMoneda } from '../../store/actions/crearCuentas'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from './styles'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const DropDownMonedas = () => {
    const classes = useStyles();
    const monedas = useSelector(store => store.monedas)
    const dispatch = useDispatch()
    const [monedaSeleccionada, seleccionarMoneda] = useState([])
    
    useEffect(() => {
        dispatch(actions.fetchMonedas())
    }, [dispatch])

    useEffect(() => {
        dispatch(selectMoneda(monedaSeleccionada))
    }, [monedaSeleccionada])

    const  handleChange =  (event) => {
        seleccionarMoneda(event.target.value)   
    }

    return(<Select
        className = {classes.selectMenu}
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={[...monedaSeleccionada]}
        onChange={handleChange}
        input={<Input />}
        placeholder="Monedas de la Cuenta"
        renderValue={(selected) => {
            let renderArray = []
            selected.map(moneda => renderArray.push(moneda.Moneda))
            return renderArray.join(', ')
        }}
        MenuProps={MenuProps}>
        {monedas.monedas.map(moneda => (
            <MenuItem key={moneda.id} value={moneda}>
                <Checkbox checked={monedaSeleccionada.indexOf(moneda) > -1}/>
                <ListItemText primary={moneda.Moneda}/>
            </MenuItem>
        ))}
    </Select>

    )
    
}
export default  DropDownMonedas