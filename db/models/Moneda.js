const db = require("../index");
const S = require("sequelize");

class Moneda extends S.model {}
Moneda.init(
    {
        Moneda:{
            type: S.STRING
        },
    }, {sequelize: db, modelName: 'Moneda'}
)

module.exports = Moneda