const db = require("../index");
const S = require("sequelize");

class RecordatorioFinPeriodo extends S.Model {}
RecordatorioFinPeriodo.init(
    {
        Destinatario:{
            type: S.STRING
        },
        Mensaje:{
            type: S.TEXT
        },
        Activo: {
            type: S.BOOLEAN,
            defaultValue: true
        }
    }, {sequelize: db, modelName: 'RecordatorioFinPeriodo'}
)

module.exports = RecordatorioFinPeriodo