import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react'
import { useWindowDimensions } from '../../viewPort'
import DesktopHome from './Desktop/DesktopHome'
const Home = () => {
    const { width } = useWindowDimensions()
    return (
        width > 640 ? <DesktopHome/>:""
    )
}

export default Home