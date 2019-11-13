"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO AULA
const sequelize_1 = require("sequelize");
exports.aula_model = (sequelize) => {
    let aula = sequelize.define('t_aula', {
        aula_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        aula_nro: {
            type: sequelize_1.DataTypes.STRING(10),
            allowNull: true
        },
        aula_piso: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        },
        aula_cap: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        tableName: 't_aula',
        timestamps: true
    });
    return aula;
};
