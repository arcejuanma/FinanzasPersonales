const movimiento = require("express").Router();
const utilsPeriodos = require("../utils/movimientos")


movimiento.post("/add", (req, res)=>{
    console.log(req.body)
    utilsPeriodos.addMovimientoXMonedaXPeriodoXCuenta(req.body.movimiento, req.body.idPeriodo)
    .then(movimiento => res.send(movimiento))
    .catch(err => console.log(err))
})

movimiento.post("/", (req, res)=>{
    console.log(req.body.periodo)
    utilsPeriodos.getMovimientosXCuenta(req.body.cuenta)
    .then(movimientos => res.send(movimientos))
    .catch(err => console.log(err))
})

movimiento.post("/delete", (req, res)=>{
    utilsPeriodos.deleteMovimiento(req.body.idMovimiento)
    .then(moviemiento => res.send(moviemiento))
    .catch(err => console.log(err))
})

module.exports = movimiento