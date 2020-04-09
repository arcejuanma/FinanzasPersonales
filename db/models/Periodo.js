const db = require("../index");
const S = require("sequelize");

class Periodo extends S.model {}
Periodo.init(
    {
        FechaInicio: {
            type: S.DATEONLY
        },
        FechaFin: {
            type: S.DATEONLY
        }
    }, {sequelize: db, modelName: 'Periodo'}
)

module.exports = Periodo