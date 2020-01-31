import { escribirArchivo} from "./escribir-archivo";
import { leerArchivo  } from "./leer-archivo";
import { Moto } from "./interfaces/interface.moto";
import * as prompts from "prompts"


async function main(){

    const contenidoArchivo = leerArchivo(
        './moto.ejemplo.txt'
    );
    console.log('contenidoArchivo', contenidoArchivo);

    /*
    let arregloCargadoDeArchivo; 
    try{
        arregloCargadoDeArchivo = JSON
                .parse(contenidoArchivo);
    } catch(error){
        arregloCargadoDeArchivo = [
            {"id":1,"nombre":"Juanito"},
            {"id":2,"nombre":"Pepito"}
        ];
        console.error('Error parseando archivo');
    }

    let contador = 3;

    let minimoId = -1;
    arregloCargadoDeArchivo
        .forEach( 
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoId){
                    minimoId = idActual
                }
            }
        );
    minimoId = minimoId + 1;
    contador = minimoId;
  
   
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    
    console.log('Cual usuario quieres Editar?');
    console.log(arregloEstudiantes);

    const idABuscar = await prompts({
            type: 'number',
            name: 'id',
            message: 'Ingresa el ID del registro a Editar'
    })
    const indiceEncontrado = arregloEstudiantes.findIndex( 
        function (valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; 
        } 
    )
    console.log('Indice encontrado:', indiceEncontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloEstudiantes
            .find( 
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
    console.log(estudianteEncontrado);

    const arregloTexto = JSON.stringify(arregloEstudiantes);
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
        )
}
*/

main().then().catch();
