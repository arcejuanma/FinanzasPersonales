const db = require("../index");
const S = require("sequelize");

class PeriodoRecurrente extends S.Model {}
PeriodoRecurrente.init(
    {
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        },
        FechaProximaEjecucion: {
            type: S.DATEONLY
        },
        FrecuenciaMeses: {
            type: S.INTEGER
        },
        FrecuenciaDias: {
            type: S.INTEGER
        },
        FechaFin: {
            type: S.DATEONLY
        },
    }, {sequelize: db, modelName: 'PeriodoRecurrente'}
)

module.exports = PeriodoRecurrente