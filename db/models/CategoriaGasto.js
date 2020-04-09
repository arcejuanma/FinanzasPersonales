const db = require("../index");
const S = require("sequelize");

class CategoriaGasto extends S.model {}
CategoriaGasto.init(
    {
        Descripcion:{
            type: S.STRING
        },
    }, {sequelize: db, modelName: 'CategoriaGastos'}
)

module.exports = CategoriaGasto