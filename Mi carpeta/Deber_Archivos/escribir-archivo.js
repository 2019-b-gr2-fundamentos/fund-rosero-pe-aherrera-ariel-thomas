"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(path, contenido) {
    fs.writeFileSync('./ejemplo.txt', contenido, 'utf8');
}
exports.escribirArchivo = escribirArchivo;
