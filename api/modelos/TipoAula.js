"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.tipoaula_model = (sequelize) => {
    var tipoaula = sequelize.define('t_tipoAula', {
        taula_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false // Que no permita valores nulos
        },
        taula_desc: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 't_tipoAula',
        timestamps: false
    });
    return tipoaula;
};
