const db = require("../index");
const S = require("sequelize");

class Movimiento extends S.Model {}
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
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'Movimiento'}
)

module.exports = Movimiento