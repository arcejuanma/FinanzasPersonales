import React from 'react'
import { useWindowDimensions } from '../../viewPort'
import DeskCrearMovimiento from './Desktop/DeskCrearMovimiento'

const CrearMovimiento = () => {
    const { width } = useWindowDimensions()
    return (
        
        width > 640 ? <DeskCrearMovimiento/>:""
    )
}

export default CrearMovimiento