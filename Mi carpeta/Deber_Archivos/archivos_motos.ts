import { escribirArchivo} from "./escribir-archivo";
import { leerArchivo  } from "./leer-archivo";
import {eliminarArchivo} from "./eliminar-archivo"
import { Moto } from "./interfaces/interface.moto";
import * as prompts from "prompts"

let id = 0;
const contenidoArchivo = leerArchivo('./moto.ejemplo.txt');
let arregloMotosCargadoDeArchivo = JSON.parse(contenidoArchivo);
let minimoid = 0;
    arregloMotosCargadoDeArchivo
        .forEach(
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoid){
                    minimoid = idActual;
                }
            }
        );
    minimoid = minimoid + 1;
            id = minimoid;
let Motos: Moto[] = arregloMotosCargadoDeArchivo;


async function escribirDatosMotos(){
    const preguntasMotos = [
        {
            type: 'text',
            name: 'Modelo',
            message: 'Ingrese el modelo de la moto'
        },
        {
            type: 'text',
            name: 'Color',
            message: 'Ingrese el color de la moto'
        },
        {
            type: 'number',
            name: 'Precio',
            message: 'Ingrese el precio de la moto'
        },
        {
            type: 'number',
            name: 'Fuerza',
            message: 'Ingrese los Caballos de Fuerza (cc) que posee la moto'
        },
        {
            type: 'text',
            name: 'Marca',
            message: 'Ingrese la marca a la que pertencese la moto'
        }
];
    const respuestaPreguntas = await prompts(preguntasMotos);
    const nuevoRegistroMoto = {

        id: id,
        Modelo: respuestaPreguntas.Modelo,
        Color: respuestaPreguntas.Color,
        Precio: respuestaPreguntas.Precio,
        Fuerza: respuestaPreguntas.Fuerza,
        Marca: respuestaPreguntas.Marca

    };

    id = id + 1;
    Motos.push(nuevoRegistroMoto);
    const arregloParseado = JSON.stringify(Motos);
    escribirArchivo('./moto.ejemplo.txt', arregloParseado);
    queDeseaHacer().then().catch();

};
async function queDeseaHacer(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que desea hacer? \n 1-Crear otro registro \n 2-Leer los registros actuales \n 3-Actualizar datos \n 4-Eliminar registros \n 5-SALIR'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        escribirDatosMotos().then().catch();
        
    }else if(respuesta1 == 2){
        leerRegistros().then().catch();

    }else if(respuesta1 == 3){
        editarRegistro().then().catch();

    }else if(respuesta1 == 4){
        eliminarRegistro().then().catch();

    }else if(respuesta1 == 5){
        console.log('Adios nos vemos pronto');
    }else{
        console.log('!Elija una opcion valida¡');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('El archivo cuenta con el siguiente registro: \n', Motos);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const idAEditar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id de la Moto para editar su información'
    });
    const idEncontrado = Motos.findIndex(
        function(valorActual){
        return valorActual.id == idAEditar.id
        }
    );
    const queDeseaEditar = await prompts({
        type: 'text',
        name: 'campoAEditar',
        message: '¿Que campo desea editar?'
    });
    const respuestaCampo = queDeseaEditar.campoAEditar;
    if(respuestaCampo == 'Modelo'){
        const nuevoModelo = await prompts({
            type: 'text',
            name: 'nuevoModelo',
            message: 'Ingrese el modelo de la nueva moto'
        });
        Motos[idEncontrado].Modelo = nuevoModelo.nuevoModelo;
    }else if(respuestaCampo == 'Color'){
        const nuevoColor = await prompts({
            type: 'text',
            name: 'nuevoColor',
            message: 'Ingrese el color de la nueva Moto'                 
        });
        Motos[idEncontrado].Color = nuevoColor.nuevoColor;
    }else if(respuestaCampo == 'Precio'){
        const nuevoPrecio = await prompts({
            type: 'number',
            name: 'nuevoPrecio',
            message: 'Ingrese el nuevo Precio en el mercado'
        });
        Motos[idEncontrado].Precio = nuevoPrecio.nuevoPrecio;
    }else if(respuestaCampo == 'Fuerza'){
        const nuevaFuerza = await prompts({
            type: 'number',
            name: 'nuevaFuerza',
            message: 'Ingrese los nuevos caballos de Fuerza que tiene la moto'
        });
        Motos[idEncontrado].Fuerza = nuevaFuerza.nuevaFuerza;
    }else if(respuestaCampo == 'Marca'){            
        const nuevaMarca = await prompts({
            type: 'text',
            name: 'Marca',
            message: 'Ingrese la nueva marca de la moto'
        });
        Motos[idEncontrado].Marca = nuevaMarca.Marca;
    }else{
        console.log('Ingrese un campo valido');
    };

    console.log('El registro de Motos actualizado es:', Motos);
    const nuevoRegistroStringificado = JSON.stringify(Motos);
    escribirArchivo('./registro-vengadores.txt', nuevoRegistroStringificado);
    queDeseaHacer().then().catch();
    return Motos
};
async function eliminarRegistro(){
    const idAEliminar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id de la Moto que desea eliminar'
    });
    const idEncontrado = Motos.findIndex(
        function(valorActual){
        return valorActual.id == idAEliminar.Aid
        }
    );
    Motos.splice(idEncontrado, 1); 
    const registroBorrado = JSON.stringify(Motos);
    escribirArchivo('./moto.ejemplo.txt', registroBorrado);
    console.log('El nuevo registro de la moto es:', Motos);
    queDeseaHacer().then().catch();
    return Motos
};

function main(){
    escribirDatosMotos().then().catch();

}

main();

