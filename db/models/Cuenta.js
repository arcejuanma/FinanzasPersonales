const db = require("../index");
const S = require("sequelize");

class Cuenta extends S.model {}
Cuenta.init(
    {
        Nombre: {
            type: S.STRING
        },
        Activa: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'Cuenta'}
)

module.exports = Cuenta