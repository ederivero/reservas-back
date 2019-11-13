"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../configuracion/sequelize");
exports.getPabellones = (req, res) => {
    sequelize_1.Pabellon.findAll().then((objPabellones) => {
        res.status(200).json({
            message: 'ok',
            content: objPabellones
        });
    });
};
exports.postPabellon = (req, res) => {
    console.log(req.body);
    // validando si el req.body cumple con los parametros minimos
    // de entrada
    if (!req.body.pab_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "No se recibieron todos los campos en el request"
        });
        return;
    }
    // creando una instanacia de la clase o modelo
    // Pabellon
    let objPabellon = sequelize_1.Pabellon.build(req.body);
    // guardando el objeto pabellón en la base de datos
    objPabellon.save().then((objPabellonCreado) => {
        res.status(201).json({
            ok: true,
            contenido: objPabellonCreado,
            mensaje: "Pabellon creado correctamente"
        });
    }).catch((errorsh) => {
        res.status(500).json({
            ok: false,
            mensaje: "Error interno en el servidor",
            contenido: errorsh
        });
    });
};
exports.getPabellonesById = (req, res) => {
    sequelize_1.Pabellon.findByPk(req.params.id).then((objPabellon) => {
        if (objPabellon) {
            res.status(200).json({
                message: 'ok',
                pabellon: objPabellon
            });
        }
        else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el pabellon'
            });
        }
    });
};
exports.updatePabellon = (req, res) => {
    sequelize_1.Pabellon.update({
        pab_nom: req.body.pabellon.pab_nom
    }, {
        where: {
            pab_id: req.body.pabellon.pab_id
        }
    }).then((pabActualizado) => {
        sequelize_1.Pabellon.findByPk(pabActualizado[0]).then((objPabellon) => {
            res.status(200).json({
                message: 'ok',
                content: objPabellon
            });
        });
    }).catch((error) => {
        res.status(501).json({
            message: 'error',
            content: error
        });
    });
};
exports.getAulasXPabellon = (req, res) => {
    console.log('Hola');
    sequelize_1.Pabellon.findAll({
        include: [{
                model: sequelize_1.Aula
            }]
    }).then((resultado) => {
        res.status(200).json({
            message: 'ok',
            content: resultado
        });
    });
};
exports.getAulasByPabellonId = (req, res) => {
    sequelize_1.Pabellon.findAll({
        where: {
            pab_id: req.params.id
        },
        include: [{
                model: sequelize_1.Aula,
                include: [{
                        model: sequelize_1.TipoAula
                    }]
            }]
    }).then((resultado) => {
        res.status(200).json({
            message: 'ok',
            content: resultado
        });
    });
};
