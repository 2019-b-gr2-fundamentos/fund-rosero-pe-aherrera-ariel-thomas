import * as fs from 'fs'; 

export function leerArchivo(path:string): string {
    console.log("Leer Archivo");
    const resultado = fs.readFileSync(
        path, //PATH
        'utf-8' //CODIFICACION En cada pais es diferente
    )
    console.log(resultado);  //Hola Amigos
    return resultado;

}



