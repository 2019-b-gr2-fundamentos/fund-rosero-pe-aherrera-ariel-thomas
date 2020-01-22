import { leerArchivo } from "./02-leer-archivo";  //Porbar el hambiente 
import { escribirArchivo } from "./03-escribir-archivo";

function main() {
    const textoleido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n ';
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoleido + nuevoContenido);
}

main();

//Guardar algo dentro de un archivo y utilizar algo dentro del programa.

