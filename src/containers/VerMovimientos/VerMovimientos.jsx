import React from 'react'
import { useWindowDimensions } from '../../viewPort'
import DeskMovimientosXCuenta from './Desktop/DeskMovimientosXCuenta'

const VerMovimientos = () => {
    const { width } = useWindowDimensions()
    return (
        width > 640 ? <DeskMovimientosXCuenta/>:""
    )
}

export default VerMovimientos