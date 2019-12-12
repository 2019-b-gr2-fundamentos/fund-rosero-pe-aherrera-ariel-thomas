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
var arreglot = [1, 2, 3, 4, 5];
function recorrerUnArreglo(arreglot, numeroIndice) {
    console.log(arreglot);
    if (numeroIndice == 4) {
        console.log("Se termino");
    }
    else {
        var nuevoIndice = numeroIndice + 1;
        console.log(arreglot[nuevoIndice]);
        recorrerUnArreglo(arreglot, nuevoIndice);
    }
}
function man() {
    recorrerUnArreglo(arreglot, 0);
}
//MATRICES
function maint() {
    var arregloDosDimensiones = [[1, 2, 3, 4], [4, 5, 6, 7]]; //indice y longitud
    //i j k æ
    //multiplicar el 0 * n elemento +
    //multiplicar el 0+1 * n-1 elemento +
    //multiplicar el 0+2 * n-2 elemento 
    arregloDosDimensiones[0][0]; //1
    arregloDosDimensiones[0][1]; //2
    arregloDosDimensiones[1][0]; //4
    arregloDosDimensiones[1][1]; //5
    console.log(arregloDosDimensiones[0].length);
    console.log(arregloDosDimensiones[1].length);
    function productoCruz(vectores, indice, longitud) {
        longitud = arregloDosDimensiones[1].length;
        indice = arregloDosDimensiones[0].length;
        var suma = 0;
        var longitudv = 3;
        var multiplicado = 0;
        for (indice = 0; indice <= 3; indice++) {
            longitud = longitudv - 1;
            multiplicado = arregloDosDimensiones[0][indice] * arregloDosDimensiones[1][longitud];
            suma = suma + multiplicado;
            console.log(suma);
            ;
        }
    }
}
// [0,0. 1*7 + 2*6 + 3*5 + 4*4]
/*
1) Definir el tamaño
2) Repetir el calculo N veces (N=tamaño)
3.1) 1er elemento del 1er arreglo
3.2) Ultimo elemento del 2do arreglo
3.3) Sumar los elementos
3.4) 1er elemento + 1 = 2do elemento del segundo arreglo-
3.5) Ultimo elemento -1 = penultimo del 2do Arreglo
3.6) Sumar los elemetos.
*/
//Escriba un programa que verifique si dos matrices son
// iguales (La matriz es de dos dimensiones n*m)
// "n" y "m" pueden ser iguales o distintas 
/*
n=2, m=3

1 2 3   2 3 4
4 5 6   4 5 6

*/
//sumar todas las filas y todas las columnas
function compararMatriz(matrizUno, matrizDos) {
    return true;
}
compararMatriz([[2, 3], [3, 4]], [[2, 3], [3, 4]]); //true
function valorM(columna) {
    return matriz1.length;
}
function valorN(fila) {
    var indice;
    for (indice; indice = false; indice++) {
        var filaIndice = matriz1[indice][0];
    }
    return fila;
}
