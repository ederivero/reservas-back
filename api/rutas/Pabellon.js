"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PABELLON ROUTER
const express_1 = require("express");
const Pabellon_1 = require("./../controladores/Pabellon");
exports.pabellon_router = express_1.Router();
exports.pabellon_router.post('/pabellon', Pabellon_1.postPabellon);
exports.pabellon_router.get('/pabellon', Pabellon_1.getPabellones);
exports.pabellon_router.get('/pabellon/:id', Pabellon_1.getPabellonesById);
exports.pabellon_router.put('/pabellon', Pabellon_1.updatePabellon);
exports.pabellon_router.get('/pabellones/aulas', Pabellon_1.getAulasXPabellon);
exports.pabellon_router.get('/pabellones/:id/aulas', Pabellon_1.getAulasByPabellonId);
