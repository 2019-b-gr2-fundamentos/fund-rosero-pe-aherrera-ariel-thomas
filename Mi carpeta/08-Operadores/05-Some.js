"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Some(arreglo, funcion) {
    var condicion = true;
    for (var i = 0; i < arreglo.length; i++) {
        var restpuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (restpuestaFuncion == true) {
            condicion = true;
        }
        else {
            condicion = false;
        }
    }
    ;
    return condicion;
}
exports.Some = Some;
