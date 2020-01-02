//Escriba un programa que verifique si dos matrices son
// iguales (La matriz es de dos dimensiones n*m)
// "n" y "m" pueden ser iguales o distintas 

/*
n=2, m=3

1 2 3   2 3 4
4 5 6   4 5 6

*/

//sumar todas las filas y todas las columnas

const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8,6],
    [9],
    [],
];



function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
    const esValido = tienenMatricesIgualesDimensiones(
        matrizUno,
        matrizDos
    );
    if(esValido){
        // Comparar los valores
        return tienenMismosValores(
            matrizUno,
            matrizDos
        );
    } else {
        return false;
    }
}

function tienenMismosValores(
    matrizUno: number[][],
    matrizDos: number[][]
):boolean{
    const primeraDimension = matrizUno.length;
    const segundaDimension = matrizUno[0].length;
    let banderaSonIguales = true;
    for(let i = 0; i < primeraDimension; i++){
        for(let j = 0; j < segundaDimension; j++){
            const valorActualM1 = matrizUno[i][j]; 
            const valorActualM2 = matrizDos[i][j]; 
            if(valorActualM1 != valorActualM2){
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;
}


function tienenMatricesIgualesDimensiones(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
        );
    const noHayFalsos = matrizUnoPrimeraDimension != false && 
    matrizUnoSegundaDimension != false &&
    matrizDosPrimeraDimension != false && 
    matrizDosSegundaDimension != false;
    if( noHayFalsos ){
        const tienenIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
        matrizUnoSegundaDimension == matrizDosSegundaDimension;
        if( tienenIgualesDimensiones ){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function obtenerPrimeraDimension(matrizUno: number[][]): number | boolean{
    // VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        let longitudActualMaxima = 0; // Auxiliar
        let longitudActualMinima = -1; // Auxiliar
        for(let i = 0; i < matrizUno.length; i++){
            const elementoActual = matrizUno[i]; // arreglo
            const longitudActual = elementoActual.length; // segunda dimension
            if(longitudActualMaxima < longitudActual){
                longitudActualMaxima = longitudActual;
            }
            if(longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }else{
                if(longitudActual < longitudActualMinima){
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if(longitudActualMaxima != longitudActualMinima){
            return false;
        }else{
            return matrizUno[0].length;
        }
    }else{
        return false;
    }
}

function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
}


function main(){
    const x = [
        [1,2,3],
        [3,3,3]
    ];
    const y = [
        [1,2,3],
        [3,3,3],
    ];
    const resultado = compararMatriz(x, y);
    console.log('Resultado: ', resultado);
}

main();

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



