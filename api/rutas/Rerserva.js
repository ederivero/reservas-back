"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Guard_1 = require("../utils/Guard");
const Reserva_1 = require("../controladores/Reserva");
exports.reserva_router = express_1.Router();
exports.reserva_router.post('/reservabyfechas/:aula_id', Guard_1.wachiman, Reserva_1.getReservaByFechas);
