const CategoriaGasto = require('./CategoriaGasto')
const Cuenta = require('./Cuenta')
const Moneda = require('./Moneda')
const MotivoMovimiento = require('./MotivoMovimiento')
const Movimiento = require('./Movimiento')
const MovimientoRecurrente = require('./MovimientoRecurrente')
const Periodo = require('./Periodo')
const PeriodoRecurrente = require('./PeriodoRecurrente')
const PeriodoXCuentaXMoneda = require('./PeriodoXCuentaXMoneda')
const RecordatorioFinPeriodo = require('./RecordatorioFinPeriodo')

RecordatorioFinPeriodo.belongsTo(Periodo)
Periodo.hasMany(RecordatorioFinPeriodo)

Periodo.hasOne(PeriodoXCuentaXMoneda)
PeriodoXCuentaXMoneda.belongsTo(Periodo)

Cuenta.hasMany(PeriodoXCuentaXMoneda)
PeriodoXCuentaXMoneda.belongsTo(Cuenta)

Cuenta.hasMany(MovimientoRecurrente)
MovimientoRecurrente.belongsTo(Cuenta)

Cuenta.hasOne(PeriodoRecurrente)
PeriodoRecurrente.belongsTo(Cuenta)

Moneda.hasMany(PeriodoXCuentaXMoneda)
PeriodoXCuentaXMoneda.belongsTo(Moneda)

PeriodoXCuentaXMoneda.hasMany(Movimiento)
Movimiento.belongsTo(PeriodoXCuentaXMoneda)

CategoriaGasto.hasMany(Movimiento)
Movimiento.belongsTo(CategoriaGasto)

MotivoMovimiento.hasMany(Movimiento)
Movimiento.belongsTo(MotivoMovimiento)

MovimientoRecurrente.belongsTo(CategoriaGasto)
CategoriaGasto.hasMany(MovimientoRecurrente)

MovimientoRecurrente.belongsTo(MotivoMovimiento)
MotivoMovimiento.hasMany(MovimientoRecurrente)

module.exports = {CategoriaGasto, Cuenta, Moneda, MotivoMovimiento, Movimiento, MovimientoRecurrente, Periodo, PeriodoRecurrente, PeriodoXCuentaXMoneda, RecordatorioFinPeriodo}