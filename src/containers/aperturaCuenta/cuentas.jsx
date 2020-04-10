import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions/monedas'
import { crearCuenta, nombreCuenta } from '../../store/actions/crearCuentas'
import DropDownMonedas from './DropDownMonedas'
import useStyles from './styles'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Icon from '@material-ui/core/Icon'
import FormGroup from '@material-ui/core/FormGroup';


const Cuentas = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [nombre, setNombre] = useState('')
    const cuenta = useSelector(store => store.crearCuenta)

    const handleSubmit = () => {
        console.log("hols")
        console.log(cuenta)
        dispatch(crearCuenta(cuenta))
    }

    const handleChange = (event) => {
        setNombre(event.target.value)
    }

    useEffect(() => {
        dispatch(nombreCuenta(nombre))
    }, [nombre])

    return (<div>
                <FormGroup className={classes.root} noValidate autoComplete="off">
                    <h1>Crear una Cuenta nueva</h1>
                    <Box display="flex " className={classes.box} >
                        <Box display="flex" className = {classes.boxLine}>
                        <TextField 
                            id="standard-basic" 
                            label="Nombre de Cuenta"
                            onChange = {handleChange}
                        />
                        <DropDownMonedas/>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Icon>send</Icon>}
                            onClick = {()=>handleSubmit()}
                            >
                            Crear
                        </Button>  
                        </Box>
 
                    </Box>
                </FormGroup>
            </div>
    )
}

export default  Cuentas