import React, {useState, useEffect} from 'react'
import { Table, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"

const MovimientosXMoneda = (props)=>{
        console.log(props)
      return <div>
        <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell style={{width:"50%"}}>Descripcion</Table.HeaderCell>
                <Table.HeaderCell style={{width:"20%"}}>Fecha</Table.HeaderCell>
                <Table.HeaderCell style={{width:"20%"}}>Monto</Table.HeaderCell>
                <Table.HeaderCell style={{width:"10%"}}>Acciones</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
        {props.movimiento.length > 0?
       props.movimiento.map(movimiento=>
           <Table.Row>
               <Table.Cell>{movimiento.Descripcion|| "N/A"}</Table.Cell>
               <Table.Cell>{movimiento.Fecha|| "N/A"}</Table.Cell>
               <Table.Cell>{movimiento.Monto || "N/A"}</Table.Cell>
               <Table.Cell><Link to={`/movimiento/edit/${movimiento._id}`}><Button>Editar</Button></Link><Link to={`/movimiento/detalles/${movimiento._id}`}><Button>Detalles</Button></Link></Table.Cell>
           </Table.Row>
       ):<h3>Sin Movimientos</h3>}
       </Table.Body>
       </Table><br></br>
    </div>
}
export default MovimientosXMoneda