import React, {useEffect, useState} from 'react'
import { Button, Checkbox, Form, Select, Dropdown, Label, Input } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchCuentas} from '../../../store/actions/cuentas'
import {addMovimiento} from '../../../store/actions/movimientos'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const DeskCrearMovimiento = () => {
    const cuentas = useSelector(store => store.cuentas)
    const [monedas, setMonedas] = useState([])
    const [monedaSeleccionada, setMonedaSeleccionada] = useState([])
    const [descripcion, setDescripcion] = useState('')
    const [monto, setMonto]= useState('')
    const [fecha, setFecha] = useState(new Date())
    const [periodo, setPeriodo] = useState()
    const [cuenta, setCuenta] = useState()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCuentas())
    },[])

    
    const onChangeCuenta = (evt, result) => {
        let monedasDisponibles = []
        setCuenta(cuentas.filter(cuenta =>cuenta._id == result.value))
        let monedasCuenta = cuentas.filter(cuenta => cuenta._id == result.value)[0].Monedas
        monedasCuenta.map(moneda => monedasDisponibles.push({text: moneda.Nombre, value:moneda._id, symbol:moneda.Simbolo}))
        setMonedas(monedasDisponibles)
    } 

    const onChangeMoneda = (evt, result) => {
        let monedaSeleccionada = result.options.filter(moneda => moneda.value == result.value)[0]
        setMonedaSeleccionada([monedaSeleccionada.symbol, monedaSeleccionada.value])
    }

    const onChangeDescripcion = (evt) =>{
        setDescripcion(evt.target.value)
    }
    const onChangeMonto = (evt) =>{
        setMonto(evt.target.value)
    }
    const onChangeFecha = (evt, result) =>{
        setFecha(result.value)
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        let idPeriodo = cuenta[0].Periodos.filter(periodo => periodo.Active && periodo.Moneda == monedaSeleccionada[1])[0]._id
        let movimientoObject = {
            movimiento: {
                monto: parseFloat(monto),
                fecha: fecha,
                descripcion: descripcion
            },
            idPeriodo: idPeriodo
        }
        dispatch(addMovimiento(movimientoObject))        
    }
    let cuentasNombre = [] 
    cuentas.map(cuenta=>cuentasNombre.push({text: cuenta.Nombre, value: cuenta._id}))

    
    return (
       <Form>
           <Form.Field>
               <label>Selecciona una cuenta</label>
               <Dropdown fluid selection onChange={onChangeCuenta}options={cuentasNombre}/>
           </Form.Field>
           <Form.Field>
               <label>Selecciona una moneda</label>
               <Dropdown fluid selection options={monedas} onChange={onChangeMoneda}/>
           </Form.Field>
           <Form.Field>
               <label>Descripción del movimiento</label>
               <input value={descripcion} onChange={onChangeDescripcion} />
           </Form.Field>
           <Form.Field>
               <label>Monto</label>
               <Input labelPosition='right'>
                   <input type="text" onChange={onChangeMonto} value={monto}/>
                   <Label basic>{monedaSeleccionada[0]}</Label>
               </Input>
           </Form.Field>
           <Form.Field>
               <label>Fecha</label>
               <SemanticDatepicker  value={fecha} onChange={onChangeFecha} type="date" name="fechaFin"/>
           </Form.Field>
           <Button onClick={handleSubmit}>
               Agregar Movimiento
           </Button>
       </Form>
    )
}

export default DeskCrearMovimiento