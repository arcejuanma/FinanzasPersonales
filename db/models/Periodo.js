const db = require("../index");
const S = require("sequelize");

class Periodo extends S.Model {}
Periodo.init(
    {
        FechaInicio: {
            type: S.DATEONLY
        },
        FechaFin: {
            type: S.DATEONLY
        },
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'Periodo'}
)

module.exports = Periodo