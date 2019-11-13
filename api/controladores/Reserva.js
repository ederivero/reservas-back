"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../configuracion/sequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.getReservaByFechas = (req, res) => {
    let { aula_id } = req.params;
    let { fechin, fechfin } = req.body;
    // SELECT * FROM RESERVA WHERE RES_FECHIN>=fechin AND RES_FECHFIN<=fechfin AND AULA_ID=aula_id
    sequelize_1.Reserva.findAll({
        where: {
            res_fechin: {
                [Op.gte]: fechin
            },
            res_fechfin: {
                [Op.lte]: fechfin
            },
            aula_id: aula_id
        }
    }).then((reserva) => {
        if (reserva) {
            res.status(200).json(reserva);
        }
        else {
            res.status(404).json({
                message: 'Error',
                content: 'No se encontro las reservas para esa aula'
            });
        }
    });
};
