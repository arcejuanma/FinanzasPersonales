import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CrearCuenta from '../../CrearCuenta/CrearCuenta'
import {Style} from './style'
import MisCuentas from '../../misCuentas/Desktop/DeskMisCuentas';
import VerMovimientos from '../../VerMovimientos/VerMovimientos'
import CrearMovimiento from '../../CrearMovimiento/CrearMovimiento'
import PosicionConsolidada from './PosicionConsolidada'

const DesktopHome = () => {
    return(
        <Router>
        <div style={{display:"flex", justifyContent: "flex-start", height:"100vh"}}>
            <div class="ui left relative vertical menu">
              <div class="item">
                <h1>FinApp</h1>
                </div>
              <div class="item">
                <div class="header">Cuentas</div>
                <div class="menu">
                  <Link to="/miscuentas"><a class="item">Mis Cuentas</a></Link>
                  <Link to="/nuevaCuenta"><a class="item">Nueva Cuenta</a></Link>
                </div>
              </div>
              <div class="item">
                <div class="header">Movimientos</div>
                <div class="menu">
                  <Link to="/nuevoMovimiento"><a class="item">Nuevo Movimiento</a></Link>
                  <a class="item">Nuevo Movimiento Recurrente</a>
                  <a class="item">Movimientos Historicos</a>
                </div>
              </div>
              <div class="item">
                <div class="header">Mi Perfil</div>
                <div class="menu">
                  <a class="item">Datos Personales</a>
                  <a class="item">Datos de Cuenta</a>
                </div>
              </div>
              <div class="item">
                <div class="header">Reportes</div>
                <div class="menu">
                  <a class="item">Reporte Movimientos</a>
                  <a class="item">FAQs</a>
                </div>
              </div>
            </div>
            <div style={Style.routerDisplay}>
            <Switch>
              <Route exact path="/">
                  <PosicionConsolidada />
              </Route>
              <Route path="/nuevaCuenta">
                <CrearCuenta />
              </Route>
              <Route path="/nuevoMovimiento">
                <CrearMovimiento />
              </Route>
              <Route path="/movimientos">
                <VerMovimientos />
              </Route>
              <Route path="/miscuentas">
                <MisCuentas/>
              </Route>
            </Switch>
            </div>
          </div>
          </Router>
    )
}

export default DesktopHome