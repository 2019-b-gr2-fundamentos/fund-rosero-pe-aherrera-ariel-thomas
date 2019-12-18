//Escriba un programa que verifique si dos matrices son
// iguales (La matriz es de dos dimensiones n*m)
// "n" y "m" pueden ser iguales o distintas 
/*
n=2, m=3

1 2 3   2 3 4
4 5 6   4 5 6

*/
//sumar todas las filas y todas las columnas
var arregloMatriz = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9],
];
function compararMatrices(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    return true;
}
function obtenerPrimeraDimension(matrizUno) {
    // VALIDACIONES = verificar que todos sean los arreglos
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    if (esValido) {
        var primeraDimensionArrelgo = matrizUno.length;
        return primeraDimensionArrelgo;
    }
    else {
        return false;
    }
}
function obtenerSegundaDimension(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    if (esValido) {
        var longitudActualMaxima = 0; // Variable Auxiliar: GUARDAR EL VALOR Y MANTENERLO DURANTE TODA LA ITERACION
        var longitudActualMinima = -1; // auxiliar 
        for (var i = 0; i < matrizUno.length; i++) {
            var elementoActual = matrizUno[i]; // arreglo
            var longitudActual = elementoActual.length; // segunda dimension
            if (longitudActualMaxima < longitudActual) {
                longitudActualMaxima = longitudActual;
            }
            if (longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }
            else {
                if (longitudActual < longitudActualMinima && longitudActualMinima >= 0) {
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if (longitudActualMaxima != longitudActualMinima) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
function verificarTodosLosElementosDeUnArregloSonArreglos(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' && elementoActual.indexOf; // Truty
        if (!esUnArreglo) {
            console.log('No es un arreglo');
            return false;
        }
    }
    return true;
}
function main() {
    var matrizUno = [
        [1, 2],
        [1]
    ];
    var matrizDos = [
        [1, 2],
        [3, 4]
    ];
    compararMatrices(matrizUno, matrizDos);
}
/* function verificarTamañoDeCadaArregloDentroDelArreglo(matrizUno: number[][]):boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    const longitudPrimerArreglo = matrizUno[0].length;
    if(esValido){
    for(let i = 1; i <= matrizUno.length ; i++){
        const longitudDemasArreglos = matrizUno[i].length;
        if(longitudPrimerArreglo == longitudDemasArreglos){
            return true;
        }else{
            return false;
        }
    }
}
}
*/
