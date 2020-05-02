import React from 'react'
import { useWindowDimensions } from '../../viewPort'
import DeskMisCuentas from './Desktop/DeskMisCuentas'
const CrearCuenta = () => {
    const { width } = useWindowDimensions()
    return (
        width > 640 ? <DeskMisCuentas/>:""
    )
}

export default CrearCuenta