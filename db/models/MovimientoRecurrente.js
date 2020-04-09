const db = require("../index");
const S = require("sequelize");

class MovimientoRecurrente extends S.model {}
MovimientoRecurrente.init(
    {
        FechaProximaEjecucion: {
            type: S.DATEONLY
        },
        Monto: {
            type: S.DECIMAL
        },
        Descripcion: {
            type: S.STRING
        },
        FrecuenciaMeses: {
            type: S.INTEGER
        },
        FrecuenciaDias: {
            type: S.INTEGER
        },
        CantidadEjecuciones: {
            type: S.INTEGER
        },
    }, {sequelize: db, modelName: 'MovimientoRecurrente'}
)

module.exports = MovimientoRecurrente