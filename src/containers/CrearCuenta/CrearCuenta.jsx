import React from 'react'
import { useWindowDimensions } from '../../viewPort'
import DesktopFormCuenta from './Desktop/DesktopFormCuenta'
const CrearCuenta = () => {
    const { width } = useWindowDimensions()
    return (
        width > 640 ? <DesktopFormCuenta/>:""
    )
}

export default CrearCuenta