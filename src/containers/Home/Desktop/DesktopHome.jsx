import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CrearCuenta from '../../CrearCuenta/CrearCuenta'
import {Style} from './style'

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
                  <a class="item">Mis Cuentas</a>
                  <Link to="/nuevaCuenta"><a class="item">Nueva Cuenta</a></Link>
                </div>
              </div>
              <div class="item">
                <div class="header">Monedas</div>
                <div class="menu">
                  <a class="item">Rails</a>
                  <a class="item">Python</a>
                  <a class="item">Php</a>
                </div>
              </div>
              <div class="item">
                <div class="header">Hosting</div>
                <div class="menu">
                  <a class="item">Shared</a>
                  <a class="item">Dedicated</a>
                </div>
              </div>
              <div class="item">
                <div class="header">Support</div>
                <div class="menu">
                  <a class="item">E-mail Support</a>
                  <a class="item">FAQs</a>
                </div>
              </div>
            </div>
            <div style={Style.routerDisplay}>
            <Switch>
              <Route path="/nuevaCuenta">
                <CrearCuenta />
              </Route>
            </Switch>
            </div>
          </div>
          </Router>
    )
}

export default DesktopHome