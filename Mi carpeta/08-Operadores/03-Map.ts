export function map(
    arregloOriginal: any[],
    funcion: (
        valorActual:any,
        indice?: number,
        arreglo?: any[]) => any
    ): any[] {
        const nuevoArreglo = [],
        const arreglo = [...arregloOriginal];
        for( let i = 0; i<arreglo.length; i++ ){
            const respuestaFuncion = funcion(
                arreglo[i],
                i,
                [...arreglo],
            );
            nuevoArreglo.push(respuestaFuncion);
        }
        return nuevoArreglo;
    }
