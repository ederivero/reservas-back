"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aula_1 = require("./../modelos/Aula");
const Pabellon_1 = require("./../modelos/Pabellon");
const TipoAula_1 = require("../modelos/TipoAula");
const Usuario_1 = require("../modelos/Usuario");
const Reserva_1 = require("../modelos/Reserva");
const Sequelize = require("sequelize");
exports.conexion = new Sequelize('nIsFWxEYRi', // DATABASE NAME
'nIsFWxEYRi', // USERNAME
'ZG6LwNUQI7', // PASSWORD
{
    host: 'remotemysql.com',
    dialect: 'mysql',
    timezone: '-05:00',
    // configuración para lectura de fechas en la base de datos
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }
});
// Otra forma de conectarse por Sequelize
// export const conexion2 = new Sequelize('mysql://root:root@localhost:3306/aulas')
exports.Pabellon = Pabellon_1.pabellon_model(exports.conexion);
exports.Aula = Aula_1.aula_model(exports.conexion);
exports.TipoAula = TipoAula_1.tipoaula_model(exports.conexion);
exports.Usuario = Usuario_1.usuario_model(exports.conexion);
exports.Reserva = Reserva_1.reserva_model(exports.conexion);
exports.Pabellon.hasMany(exports.Aula, { foreignKey: "pab_id" });
exports.Aula.belongsTo(exports.Pabellon, { foreignKey: "pab_id" });
// Para crear relacion entre aula y reserva por medio de su FK que se va a llamar "aula_id"
exports.Aula.hasMany(exports.Reserva, { foreignKey: "aula_id" });
exports.Reserva.belongsTo(exports.Aula, { foreignKey: "aula_id" });
exports.Usuario.hasMany(exports.Reserva, { foreignKey: "usu_id" });
exports.Reserva.belongsTo(exports.Usuario, { foreignKey: "usu_id" });
// TipoAula tiene muchas Aulas
exports.TipoAula.hasMany(exports.Aula, { foreignKey: "taula_id" });
// muchas Aula tiene TipoAula
exports.Aula.belongsTo(exports.TipoAula, { foreignKey: "taula_id" });
