"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../configuracion/sequelize");
let getAulas = (req, res) => {
};
exports.postAula = (req, res) => {
    let objAula = sequelize_1.Aula.build(req.body.aula);
    objAula.save().then((aulaCreada) => {
        res.status(201).json({
            message: 'ok',
            content: aulaCreada
        });
    }).catch((error) => {
        res.status(501).json({
            message: 'error',
            error
        });
    });
};
