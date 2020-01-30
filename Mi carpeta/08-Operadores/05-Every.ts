export function Some(
    arreglo: any[],
    funcion: (
        valorActual: any,
        indice?: number,
        arreglo?: any[] )=> boolean 
): boolean {
    let  condicion = true;
    for( let i = 0; i < arreglo.length; i++) {
        const respuestaFuncion = funcion(
            
        )

