const db = require("../index");
const S = require("sequelize");

class Movimiento extends S.model {}
Movimiento.init(
    {
        Fecha: {
            type: S.DATEONLY
        },
        Monto: {
            type: S.DECIMAL
        },
        Descripcion: {
            type: S.STRING
        },
    }, {sequelize: db, modelName: 'Movimiento'}
)

module.exports = Movimiento