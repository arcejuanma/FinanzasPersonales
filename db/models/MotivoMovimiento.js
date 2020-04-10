const db = require("../index");
const S = require("sequelize");

class MotivoMovimiento extends S.Model {}
MotivoMovimiento.init(
    {
        Descripcion:{
            type: S.STRING,
            allowNull: false
        },
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'MotivoMovimiento'}
)

module.exports = MotivoMovimiento