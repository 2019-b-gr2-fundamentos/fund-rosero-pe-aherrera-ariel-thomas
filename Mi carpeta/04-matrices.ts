//Escriba un programa que verifique si dos matrices son
// iguales (La matriz es de dos dimensiones n*m)
// "n" y "m" pueden ser iguales o distintas 

/*
n=2, m=3

1 2 3   2 3 4
4 5 6   4 5 6

*/

//sumar todas las filas y todas las columnas

function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
) : boolean {
    return true;
}

const arregloMatriz = [ [1,2], [3,4,5] , [6,7,8], [9] ]

function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[] 
) :boolean {
    for( let i=0 ; i< arreglo.length ; i++ ) {  
        const elementoActual = arreglo[i]; 
        const esUnArreglo = typeof elementoActual == `object` && elementoActual.indexOf //Truty  
        if (!esUnArreglo) {
            console.log(`No es un arreglo`);
            return false;
        }
}
return true; 
}


function verificarTamanioDeCadaArregloDentroDelArreglo(matrizUno: number[][]) :boolean {
    const logitudDelPrimerArreglo = matrizUno[0].length;
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);  //sacar longitud maxima y minima
    if(esValido) {  
    for( let i = 1 ; i <= matrizUno.length ; i++ ) { 
        const logitudDeMasArreglo = matrizUno[i].length;
        if ( logitudDeMasArreglo == logitudDelPrimerArreglo ) {
            return true; 
        } else {
            return false; 
        }
        }
    }
} 

function obtenerPrimeraDimension(matrizUno: number[][]) :number | false {
    //VALIDACIONES
    //Verificar que todos sean arreglos
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido) {
    const primeraDimensionArreglo = matrizUno.length;
    return primeraDimensionArreglo
    } else {
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]) :number | false {
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMaxima = 0;  //Auxiliar: Guardar ek valor y mantenerlo durante el tiempo 
    let longitudActualMinima = -1; 
    for (let i=0 ; i < matrizUno.length ; i++) {
        const elementoActual = matrizUno[i]; //arreglo 
        const longitudActual = elementoActual.length //segunda dimension 
        if (longitudActualMaxima < longitudActual) {
            longitudActualMaxima = longitudActual;  
        } 
        if ( longitudActualMinima == -1 ) { 
            longitudActualMinima = longitudActual;      
}
}
}
compararMatriz( [[2,3],[3,4]] , [[2,3],[3,4]]) //true

function mainArreglo() {
    //compararMatriz()
}

