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
function motos() {
    return __awaiter(this, void 0, void 0, function () {
        function agregarMoto() {
            return __awaiter(this, void 0, void 0, function () {
                var informacionMotos;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts(preguntas)];
                        case 1:
                            informacionMotos = _a.sent();
                            arregloMotos.push(informacionMotos);
                            opciones();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function editarMotos() {
            return __awaiter(this, void 0, void 0, function () {
                var indice, caracteristicaAeditar, nuevoValor, MotoElegida;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'indice',
                                message: 'Inserte el indice de la caracteristica de la moto que quiere editar'
                            })];
                        case 1:
                            indice = _a.sent();
                            if (!(indice.indice < arregloMotos.length)) return [3 /*break*/, 6];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'caracteristica',
                                    message: '¿Que desea editar?'
                                })];
                        case 2:
                            caracteristicaAeditar = _a.sent();
                            if (!(caracteristicaAeditar.caracteristica == 'Modelo'
                                || caracteristicaAeditar.caracteristica == 'Color'
                                || caracteristicaAeditar.caracteristica == 'Precio'
                                || caracteristicaAeditar.caracteristica == 'Fuerza'
                                || caracteristicaAeditar.caracteristica == 'Marca')) return [3 /*break*/, 4];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'valor',
                                    message: '¿Que desea insertar?'
                                })];
                        case 3:
                            nuevoValor = _a.sent();
                            MotoElegida = arregloMotos[indice.indice];
                            switch (caracteristicaAeditar.caracteristica) {
                                case 'Modelo':
                                    MotoElegida.Modelo = nuevoValor.valor;
                                    break;
                                case 'Color':
                                    MotoElegida.Color = nuevoValor.valor;
                                    break;
                                case 'Precio':
                                    MotoElegida.Precio = nuevoValor.valor;
                                    break;
                                case 'Fuerza':
                                    MotoElegida.Fuerza = nuevoValor.valor;
                                    break;
                                case 'Marca':
                                    MotoElegida.Marca = nuevoValor.valor;
                                    break;
                            }
                            opciones();
                            return [3 /*break*/, 5];
                        case 4:
                            console.log('La caracteristica indicada no existe');
                            editarMotos();
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            console.log('El indice ingresado no existe, intente nuevamente');
                            editarMotos();
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        function opciones() {
            return __awaiter(this, void 0, void 0, function () {
                var opciones;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'eleccion',
                                message: 'Insertar nueva moto --> 1 || Editar una moto que ya existe --> 2 || Eliminar --> 3 || Salir -> 4 '
                            })];
                        case 1:
                            opciones = _a.sent();
                            switch (opciones.eleccion) {
                                case '1':
                                    agregarMoto();
                                    break;
                                case '2':
                                    editarMotos();
                                    break;
                                case '3':
                                    console.log(arregloMotos);
                                    break;
                                case '4':
                                    console.log("Gracias por su visita");
                                    break;
                                default:
                                    console.log('La opción0 no es valida, intente de nuevo');
                                    opciones();
                                    break;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        var arregloMotos, preguntas;
        return __generator(this, function (_a) {
            arregloMotos = [];
            preguntas = [
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
            ;
            agregarMoto();
            return [2 /*return*/];
        });
    });
}
;
motos();
