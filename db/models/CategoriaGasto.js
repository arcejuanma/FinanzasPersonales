const db = require("../index");
const S = require("sequelize");

class CategoriaGasto extends S.Model {}
CategoriaGasto.init(
    {
        Descripcion:{
            type: S.STRING,
            allowNull: false
        },
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'CategoriaGastos'}
)

module.exports = CategoriaGasto