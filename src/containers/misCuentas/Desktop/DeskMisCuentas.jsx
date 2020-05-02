import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchCuentas} from '../../../store/actions/cuentas'
import { Card, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"
const MisCuentas = () =>{
    const cuentas = useSelector(store => store.cuentas)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCuentas())
    },[])
    return(
        <Card.Group>
            {cuentas.map(cuenta => {
            let cuentaDesde = cuenta.Periodos.length > 0? new Date(cuenta.Periodos[cuenta.Periodos.length -1 ].FechaInicio) : new Date()
            let cuentaHasta = cuenta.Periodos.length > 0? new Date(cuenta.Periodos[cuenta.Periodos.length -1 ].FechaFin) : new Date()
            let nombre = cuenta.Nombre
            return (
                <Card style={{padding:"1%"}}>
                <Card.Header>{nombre} </Card.Header>
                <Card.Meta>{`Periodo Actual: ${cuentaDesde.getDay()}/${cuentaDesde.getMonth()+1}/${cuentaDesde.getFullYear()} - ${cuentaHasta.getDay()}/${cuentaHasta.getMonth()+1}/${cuentaHasta.getFullYear()}`}  </Card.Meta>
                <Card.Content extra>
                <div className='ui two buttons'>
                    <Link to={`/movimientos/${cuenta._id}`}>
                    <Button basic color='green' style={{marginRight: "2%"}}>
                        Movimientos
                    </Button>
                    </Link>
                    <Button basic color='grey'>
                        Ver Detalles
                    </Button>
                </div>
                </Card.Content>
                </Card>)
            })}
        </Card.Group>
    )    
}

export default MisCuentas
