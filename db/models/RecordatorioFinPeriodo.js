const db = require("../index");
const S = require("sequelize");

class RecordatorioFinPeriodo extends S.model {}
RecordatorioFinPeriodo.init(
    {
        Destinatario:{
            type: S.STRING
        },
        Mensaje:{
            type: S.TEXT
        }
    }, {sequelize: db, modelName: 'RecordatorioFinPeriodo'}
)

module.exports = RecordatorioFinPeriodo