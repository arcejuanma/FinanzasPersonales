const db = require("../index");
const S = require("sequelize");

class MotivoMovimiento extends S.model {}
MotivoMovimiento.init(
    {
        Descripcion:{
            type: S.STRING
        },
    }, {sequelize: db, modelName: 'MotivoMovimiento'}
)

module.exports = MotivoMovimiento