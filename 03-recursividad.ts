//Forma de repetir las cosas, ayuda a bajar la complejidad del algoritmo

function imprimirMensajeNVeces(
    mensaje:string,
    numeroVeces: number

) :void {
    if(numeroVeces == 0) {
        console.log(`Se termino`);
    } else {
    console.log(mensaje);
    const nuevoNumeroVeces = numeroVeces - 1;
    imprimirMensajeNVeces(mensaje, nuevoNumeroVeces)

    }
}

function main() {
    imprimirMensajeNVeces(`hola`, 3);
}



const arreglo : number[] = [1,2,3,4,5];

function recorrerUnArreglo(arreglo: number[] , numeroIndice: number ): void {
    console.log(arreglo);
    if (numeroIndice == 4){
    console.log(`Se termino`);
} else {
    const nuevoIndice = numeroIndice + 1;
    console.log( arreglo [nuevoIndice] );
    recorrerUnArreglo(arreglo, nuevoIndice)
}
}

function man() {
    recorrerUnArreglo( arreglo, 0)
}
