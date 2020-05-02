import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchMovimientos} from '../../../store/actions/movimientos'
import { useLocation } from 'react-router-dom'
import MovimientosXMoneda from './MovimientosXMoneda'

const DeskMovimientosCuenta = ()=>{
    const periodos = useSelector(store => store.periodos)
    const cuentas = useSelector(store => store.cuentas)
    
    const dispatch = useDispatch()
    const idCuenta = useLocation().pathname.split('/')[2]
    const cuenta = cuentas.filter(cuenta => cuenta._id == idCuenta)


    const getMovimientos = useEffect(()=>{
        dispatch(fetchMovimientos(idCuenta))
    },[]) 
    

    return <div>
       {periodos.map(periodo =>
       <div>
            <h2>Movimientos en {periodo.Moneda.Nombre} </h2>
            <h5>Saldo $ {periodo.Saldo}</h5>
            <MovimientosXMoneda movimiento={periodo.Movimientos}/>
       </div>)}
    </div>
}

export default DeskMovimientosCuenta