"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function eliminarArchivo(path, id) {
    var resultado = fs.eliminateFileSync(path, id, 'utf-8');
    return resultado;
}
exports.eliminarArchivo = eliminarArchivo;
