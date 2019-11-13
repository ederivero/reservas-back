"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../configuracion/sequelize");
const express_1 = __importDefault(require("express"));
const Pabellon_1 = require("./../rutas/Pabellon");
let bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = __importStar(require("./../apidocs/swagger.json"));
const Aula_1 = require("../rutas/Aula");
const Usuario_1 = require("../rutas/Usuario");
const Rerserva_1 = require("../rutas/Rerserva");
class Server {
    constructor() {
        this.app = express_1.default();
        // obtener el puerto que nos asignará heroku
        // o establer por defecto el puerto 3000
        this.puerto = process.env.PORT || 3000;
        // la configuracion de body-parser, siempre debe estas
        // antes de configurar las rutas
        this.configurarBodyParser();
        this.configurarRutas();
    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }
    configurarRutas() {
        // configurando una ruta por defecto o de prueba
        this.app.get('/', (req, res) => {
            res.status(200).send("BIENVENIDO AL SERVIDOR");
        });
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.app.use('/api', Pabellon_1.pabellon_router);
        this.app.use('/api', Aula_1.aulas_router);
        this.app.use('/api', Usuario_1.usuario_router);
        this.app.use('/api', Rerserva_1.reserva_router);
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor OK en el puerto ${this.puerto}`);
            // force:true, elimina todas las tablas y las crea nuevamente
            // force:false, si las tablas no existen en la base de datos
            // las crea. Si las tablas ya existían en la base de datos
            // sólo crea las nuevas tablas en caso de que hubieran
            sequelize_1.conexion.sync({ force: false }).then(() => {
                console.log("Base de datos creada correctamente");
            });
        });
    }
}
exports.Server = Server;
