const moneda = require("express").Router();
const Moneda = require('../db/models/Moneda')
//Alta y Consulta de monedas
moneda.post('/crear', (req, res)=>{
    Moneda.create({
        Nombre: req.body.nombre,
        Simbolo: req.body.simbolo
    })
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

moneda.get("/", (req,res) => {
    Moneda.find()
    .then(data => res.send(data))
} )


module.exports = moneda