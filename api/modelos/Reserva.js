"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.reserva_model = (sequelize) => {
    var reserva = sequelize.define('t_reserva', {
        res_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        res_fechin: {
            type: sequelize_1.DataTypes.DATE
        },
        res_fechfin: {
            type: sequelize_1.DataTypes.DATE
        },
        res_est: {
            type: sequelize_1.DataTypes.STRING(45)
        },
        res_obs: {
            type: sequelize_1.DataTypes.TEXT
        }
    }, {
        tableName: 't_reserva',
        timestamps: false
    });
    return reserva;
};
