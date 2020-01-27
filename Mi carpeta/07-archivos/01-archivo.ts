import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from "prompts";

//Parsear -> coger un texto y tranformarlo en algun tipo de estructura -> Se parcea el contenido del texto
/*
{
    "nombre": "Adrian"
}

<universidad>
    <facultad></facultad>
</universidad>

*/ 

async function main(){
    
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenido Archivo:', contenidoArchivo);

    let arregloCargadoDeArchivo;  //undefine
    try{ //Las cosas salen bien
        arregloCargadoDeArchivo = JSON.
        parse(contenidoArchivo);
    } catch(error) {
        arregloCargadoDeArchivo = [];          //Tenemos Undefined
        console.log('Error parseado archivo');
    }

    let contador = 1;
    //Operadores
    let minimoID = -1;
    arregloCargadoDeArchivo
        .forEach(           //No se envi nada y no se les devuelve nada y sirve solo para iterar
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoID){
                    minimoID = idActual
                }
            }        
    );
    minimoID = minimoID + 1;
    contador = minimoID;
    /*
    try{
        console.log('1');
        console.log('2');
        var a = b;
        //throw new Error("EL ARCHIVO ESTA MAL PARSEADO")
        console.log('4');
        console.log('5');
    } catch(error){
        console.log(error);
        console.log(':3')
    }
    */
    
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
    const arregloTexto = JSON.stringify(arregloEstudiantes);
    console.log(arregloTexto);

    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
    );


}  
main().then().catch();



