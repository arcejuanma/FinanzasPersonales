const db = require("../index");
const S = require("sequelize");

class PeriodoXCuentaXMoneda extends S.Model {}
PeriodoXCuentaXMoneda.init(
    {
        Saldo:{
            type: S.DECIMAL
            },
        Estado:{
            type: S.STRING
        },
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'PeriodoXCuentasXMoneda'}
)

module.exports = PeriodoXCuentaXMoneda