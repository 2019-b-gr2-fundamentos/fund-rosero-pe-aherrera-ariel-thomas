"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("./node_modules/prompts");
var id = 1;
var arregloMotos = [];
function crearDatosMotos() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntasMoto, respuestaPreguntas, nuevoRegistroMoto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntasMoto = [
                        {
                            type: 'text',
                            name: 'Modelo',
                            message: 'Ingrese el modelo de la moto'
                        },
                        {
                            type: 'text',
                            name: 'Color',
                            message: 'Ingrese el color de la moto'
                        },
                        {
                            type: 'number',
                            name: 'Precio',
                            message: 'Ingrese el precio de la moto'
                        },
                        {
                            type: 'number',
                            name: 'Fuerza',
                            message: 'Ingrese los Caballos de Fuerza (cc) que posee la moto'
                        },
                        {
                            type: 'text',
                            name: 'Marca',
                            message: 'Ingrese la marca a la que pertencese la moto'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntasMoto)];
                case 1:
                    respuestaPreguntas = _a.sent();
                    nuevoRegistroMoto = {
                        Aid: id,
                        Modelo: respuestaPreguntas.Modelo,
                        Color: respuestaPreguntas.Color,
                        Precio: respuestaPreguntas.Precio,
                        Fuerza: respuestaPreguntas.Fuerza,
                        Marca: respuestaPreguntas.Marca
                    };
                    id = id + 1;
                    arregloMotos.push(nuevoRegistroMoto);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/];
            }
        });
    });
}
;
function queDeseaHacer() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuesta1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: 'Seleccione la opción que desea realizar \n 1-Crear otro registro \n 2-Leer los registros actuales \n 3-Actualizar datos \n 4-Eliminar registros \n 5-SALIR'
                    })];
                case 1:
                    preguntas = _a.sent();
                    respuesta1 = preguntas.respuestas;
                    if (respuesta1 == 1) {
                        crearDatosMotos().then().catch();
                    }
                    else if (respuesta1 == 2) {
                        leerRegistros().then().catch();
                    }
                    else if (respuesta1 == 3) {
                        editarRegistro().then().catch();
                    }
                    else if (respuesta1 == 4) {
                        eliminarRegistro().then().catch();
                    }
                    else if (respuesta1 == 5) {
                        console.log('Adios vuelve pronto');
                    }
                    else {
                        console.log('Elija una opcion valida');
                        queDeseaHacer().then().catch();
                    }
                    ;
                    return [2 /*return*/, preguntas.respuestas];
            }
        });
    });
}
;
function leerRegistros() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Registro de Motos:', arregloMotos);
            queDeseaHacer().then().catch();
            return [2 /*return*/];
        });
    });
}
;
function editarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEditar, AidEncontrado, queDeseaEditar, respuestaCampo, nuevoModelo, nuevoColor, nuevoPrecio, nuevaFuerza, nuevaMarca;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingrese el Aid de la Moto cuya informacion desea cambiar'
                    })];
                case 1:
                    AidAEditar = _a.sent();
                    AidEncontrado = arregloMotos.findIndex(function (valorActual) {
                        return valorActual.Aid == AidAEditar.Aid;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'campoAEditar',
                            message: '¿Que campo desea cambiar?'
                        })];
                case 2:
                    queDeseaEditar = _a.sent();
                    respuestaCampo = queDeseaEditar.campoAEditar;
                    if (!(respuestaCampo == 'Modelo')) return [3 /*break*/, 4];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoModelo',
                            message: 'Ingrese el modelo de la nueva moto'
                        })];
                case 3:
                    nuevoModelo = _a.sent();
                    arregloMotos[AidEncontrado].Modelo = nuevoModelo.nuevoModelo;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(respuestaCampo == 'Color')) return [3 /*break*/, 6];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoColor',
                            message: 'Ingrese el color de la nueva Moto'
                        })];
                case 5:
                    nuevoColor = _a.sent();
                    arregloMotos[AidEncontrado].Color = nuevoColor.nuevoColor;
                    return [3 /*break*/, 13];
                case 6:
                    if (!(respuestaCampo == 'Precio')) return [3 /*break*/, 8];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'nuevoPrecio',
                            message: 'Ingrese el nuevo Precio en el mercado'
                        })];
                case 7:
                    nuevoPrecio = _a.sent();
                    arregloMotos[AidEncontrado].Precio = nuevoPrecio.nuevoPrecio;
                    return [3 /*break*/, 13];
                case 8:
                    if (!(respuestaCampo == 'Fuerza')) return [3 /*break*/, 10];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'nuevaFuerza',
                            message: 'Ingrese los nuevos caballos de Fuerza que tiene la moto'
                        })];
                case 9:
                    nuevaFuerza = _a.sent();
                    arregloMotos[AidEncontrado].Fuerza = nuevaFuerza.nuevaFuerza;
                    return [3 /*break*/, 13];
                case 10:
                    if (!(respuestaCampo == 'Marca')) return [3 /*break*/, 12];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'Marca',
                            message: 'Ingrese la nueva marca de la moto'
                        })];
                case 11:
                    nuevaMarca = _a.sent();
                    arregloMotos[AidEncontrado].Marca = nuevaMarca.Marca;
                    return [3 /*break*/, 13];
                case 12:
                    console.log('Ingrese un campo valido');
                    _a.label = 13;
                case 13:
                    ;
                    console.log('El registro de Motos actualizado es:', arregloMotos);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, arregloMotos];
            }
        });
    });
}
;
///
function eliminarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEliminar, AidEncontrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingrese el Aid de la moto cuya informacion desea eliminar'
                    })];
                case 1:
                    AidAEliminar = _a.sent();
                    AidEncontrado = arregloMotos.findIndex(function (valorActual) {
                        return valorActual.Aid == AidAEliminar.Aid;
                    });
                    arregloMotos.splice(AidEncontrado, 1);
                    console.log('El nuevo registro de la Moto es:', arregloMotos);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, arregloMotos];
            }
        });
    });
}
function main() {
    crearDatosMotos().then().catch();
}
main();
