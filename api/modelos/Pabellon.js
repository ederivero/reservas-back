"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO PABELLON
const sequelize_1 = require("sequelize");
exports.pabellon_model = (sequelize) => {
    let pabellon = sequelize.define('t_pabellon', {
        pab_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        pab_nom: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        tableName: 't_pabellon',
        timestamps: true
    });
    return pabellon;
};
