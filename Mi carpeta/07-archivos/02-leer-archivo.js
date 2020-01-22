"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    console.log("Leer Archivo");
    var resultado = fs.readFileSync(path, //PATH
    'utf-8' //CODIFICACION En cada pais es diferente
    );
    console.log(resultado); //Hola Amigos
    return resultado;
}
exports.leerArchivo = leerArchivo;
