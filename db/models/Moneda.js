const db = require("../index");
const S = require("sequelize");

class Moneda extends S.Model {}
Moneda.init(
    {
        Moneda:{
            type: S.STRING,
            allowNull: false
        },
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'Moneda'}
)

module.exports = Moneda