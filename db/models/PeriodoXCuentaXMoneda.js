const db = require("../index");
const S = require("sequelize");

class PeriodoXCuentaXMoneda extends S.model {}
PeriodoXCuentaXMoneda.init(
    {
        Saldo:{
            type: S.DECIMAL
            },
        Estado:{
            type: S.STRING
        }
    }, {sequelize: db, modelName: 'PeriodoXCuentasXMoneda'}
)

module.exports = PeriodoXCuentaXMoneda