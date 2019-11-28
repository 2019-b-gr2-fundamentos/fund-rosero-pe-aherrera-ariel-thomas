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
var arreglo = [1, 2, 3, 4, 5];
function recorrerUnArreglo(arreglo, numeroIndice) {
    console.log(arreglo);
    if (numeroIndice == 4) {
        console.log("Se termino");
    }
    else {
        var nuevoIndice = numeroIndice + 1;
        console.log(arreglo[nuevoIndice]);
        recorrerUnArreglo(arreglo, nuevoIndice);
    }
}
function man() {
    recorrerUnArreglo(arreglo, 0);
}
//MATRICES
var arregloDosDimensiones = [[1, 2, 3, 4], [4, 5, 6, 7]]; //indice y longitud
//i j k æ
//multiplicar el 0 * n elemento +
//multiplicar el 0+1 * n-1 elemento +
//multiplicar el 0+2 * n-2 elemento 
arregloDosDimensiones[0][0]; //1
arregloDosDimensiones[0][1]; //2
arregloDosDimensiones[1][0]; //3
arregloDosDimensiones[1][1]; //4
console.log(arregloDosDimensiones[0].length);
console.log(arregloDosDimensiones[1].length);
var tamañoA1 = arregloDosDimensiones[0].length;
var tamañoA2 = arregloDosDimensiones[1].length;
var m = 0;
var indiceA1 = arregloDosDimensiones[0][m];
var l = arregloDosDimensiones[1].length;
var indiceA2 = arregloDosDimensiones[1][l];
for (indiceA1; indiceA1 <= arregloDosDimensiones[0].length; indiceA1++) {
    for (m = 0; m <= 3; m++) {
    }
    console.log(indiceA1);
}

for (indiceA2; indiceA2 <= 0; indiceA2--) {
    for (l = arregloDosDimensiones[1].length; l <= 0; l--) {
        console.log("Vamos del Puctas");
    }
    console.log(indiceA2);
}
//function productoCruz(vectores: number[][]): number[]{
//return [0,0, resultado]
//for(   )
//}
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
