import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from "prompts";

async function main(){
    let contador = 1;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenido Archivo:', contenidoArchivo);
    const arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    //console.log(respuestaEstudianteUno);
    
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);
    
    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    //console.log(respuestaEstudianteDos);

    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);

    console.log('Cual usuario quieres editar?');
    console.log(arregloEstudiantes);
    
    // OPERADORES!!!! REEMPLAZAR AL FOR

    const idABuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el id del registro a editar'
    });

    const indiceEncontrado = arregloEstudiantes.findIndex( //return CONDICION    
        function (valorActual, indice, arrelgo){
            //console.log(valorActual);
            //console.log(indice);
            //console.log(arrelgo);
            return valorActual.id == idABuscar.id; // Nos devuelve el indice
        } // Si encuentra nos devuelve el indice
          // No encuentra
    );
    console.log('Indice encontrado:', indiceEncontrado);

    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    });
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });

    const estudianteEcontrado = arregloEstudiantes.find( // return condicion
        function(valorActual){
            return valorActual.nombre == buscar.nombre;
        }
    );
    console.log(estudianteEcontrado);
    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const  nuevoContenido = 'Tengo Hambre :( \n ';
    escribirArchivo('./ejemplo.txt','');
    console.log(textoLeido + nuevoContenido);
    */
}
main().then().catch();