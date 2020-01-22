"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivo_1 = require("./02-leer-archivo"); //Porbar el hambiente 
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
function main() {
    var textoleido = _02_leer_archivo_1.leerArchivo('./ejemplo.txt');
    var nuevoContenido = 'TENGO HAMBRE :( \n ';
    _03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', '');
    console.log(textoleido + nuevoContenido);
}
main();
//Guardar algo dentro de un archivo y utilizar algo dentro del programa.
