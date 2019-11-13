"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Aula_1 = require("../controladores/Aula");
exports.aulas_router = express_1.Router();
exports.aulas_router.post('/aula', Aula_1.postAula);
