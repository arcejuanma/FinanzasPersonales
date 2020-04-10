const db = require("../index");
const S = require("sequelize");

class Cuenta extends S.Model {}
Cuenta.init(
    {
        Nombre: {
            type: S.STRING,
            allowNull: false
        },
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'Cuenta'}
)

module.exports = Cuenta