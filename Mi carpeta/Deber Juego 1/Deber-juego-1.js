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
console.log("Bienvenido al Juego de Puzzle de Numeros");
console.log("El objetivo del juego es dejar el puzzle exactamente igual que como estaba antes");
console.log("Puzzle Correcto");
var matrizCorrecta = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, '']
];
console.log(matrizCorrecta);
console.log("\nPuzzle Incorrecto");
var nuevoNumero = 0;
var i = 0;
var j = 0;
var numeroActual = -1;
var tamañoDeCadaFila = 4;
var matrizJuego = [
    [],
    [],
    [],
    []
];
var primeraFila = [];
var segundaFila = [];
var terceraFila = [];
var cuartaFila = [];
function generarJuego() {
    return __awaiter(this, void 0, void 0, function () {
        var matrizIncorrecta;
        return __generator(this, function (_a) {
            primeraFila = [-1, -1, -1, -1];
            do {
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]) {
                    j = j;
                }
                else {
                    matrizJuego[0].push(nuevoNumero);
                    numeroActual = nuevoNumero;
                    primeraFila[j] = numeroActual;
                    primeraFila = primeraFila;
                    j = j + 1;
                }
                ;
            } while (j < tamañoDeCadaFila);
            //console.log(matrizJuego);
            //console.log(primeraFila)
            //console.log(numeroActual);
            j = 0;
            segundaFila = [-1, -1, -1, -1];
            do {
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3] ||
                    nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]) {
                    j = j;
                }
                else {
                    matrizJuego[1].push(nuevoNumero);
                    numeroActual = nuevoNumero;
                    segundaFila[j] = numeroActual;
                    segundaFila = segundaFila;
                    j = j + 1;
                }
                ;
            } while (j < tamañoDeCadaFila);
            //console.log(matrizJuego);
            j = 0;
            terceraFila = [-1, -1, -1, -1];
            do {
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3] ||
                    nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3] ||
                    nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3]) {
                    j = j;
                }
                else {
                    matrizJuego[2].push(nuevoNumero);
                    numeroActual = nuevoNumero;
                    terceraFila[j] = numeroActual;
                    terceraFila = terceraFila;
                    j = j + 1;
                }
                ;
            } while (j < tamañoDeCadaFila);
            //console.log(matrizJuego);
            j = 0;
            cuartaFila = [-1, -1, -1, ''];
            do {
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3] ||
                    nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3] ||
                    nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3] ||
                    nuevoNumero == cuartaFila[0] || nuevoNumero == terceraFila[1]) {
                    j = j;
                }
                else {
                    matrizJuego[3].push(nuevoNumero);
                    numeroActual = nuevoNumero;
                    cuartaFila[j] = numeroActual;
                    cuartaFila = cuartaFila;
                    j = j + 1;
                }
                ;
            } while (j < 4);
            matrizJuego[3].splice(3, 1, '');
            matrizIncorrecta = [matrizJuego[0], matrizJuego[1], matrizJuego[2], matrizJuego[3]];
            console.log(matrizIncorrecta);
            return [2 /*return*/];
        });
    });
}
;
function main() {
    generarJuego().then().catch();
    //generarSegundaFila();
}
;
main();
console.log("No olvide que solo los numeros que esten al lado \n del espacio vacio podran ocupar este espacio");
var valorA1 = matrizJuego[0][0];
var valorA2 = matrizJuego[0][1];
var valorA3 = matrizJuego[0][2];
var valorA4 = matrizJuego[0][3];
var valorB1 = matrizJuego[1][0];
var valorB2 = matrizJuego[1][1];
var valorB3 = matrizJuego[1][2];
var valorB4 = matrizJuego[1][3];
var valorC1 = matrizJuego[2][0];
var valorC2 = matrizJuego[2][1];
var valorC3 = matrizJuego[2][2];
var valorC4 = matrizJuego[2][3];
var valorD1 = matrizJuego[3][0];
var valorD2 = matrizJuego[3][1];
var valorD3 = matrizJuego[3][2];
var valorD4 = matrizJuego[3][3];
function MDiagonalInferiorDerecho() {
    var valorD4 = matrizJuego[3][3];
    var valorD3 = matrizJuego[3][2];
    var valorC4 = matrizJuego[2][3];
    if (valorD3) {
        var Auxiliar1 = void 0;
    }
}
