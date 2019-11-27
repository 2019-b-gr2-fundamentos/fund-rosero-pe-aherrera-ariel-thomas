//Forma de repetir las cosas, ayuda a bajar la complejidad del algoritmo
function imprimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log("Se termino");
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    imprimirMensajeNVeces("hola", 3);
}
var arreglo = [5, 6, 7, 8, 9];
console.log(arreglo);
function recorrerUnArreglo(arreglo, numeroIndice) {
    
    if (numeroIndice == 5) {
        console.log("Se termino");
    }
    else {
        console.log(arreglo[numeroIndice]);
        var nuevoIndice = numeroIndice + 1;
        recorrerUnArreglo(arreglo, nuevoIndice);

    }
}
function man() {
    recorrerUnArreglo(arreglo, 0);
}
