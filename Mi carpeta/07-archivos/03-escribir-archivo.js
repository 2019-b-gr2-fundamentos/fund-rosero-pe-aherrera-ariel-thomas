"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(path, contenido) {
    fs.writeFileSync('./ejemplo.txt', //PATH
    contenido, //CONTENIDO
    'utf8' //CODIFICACIÓN
    );
}
exports.escribirArchivo = escribirArchivo;
