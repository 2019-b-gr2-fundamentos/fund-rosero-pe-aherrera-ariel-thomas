import * as prompts from './node_modules/prompts'
import {Moto} from './Interfaces/moto.interface'

let id = 1;
let arregloMotos: Moto[] = [];

async function crearDatosMotos(){
    const preguntasMoto = [
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

    const respuestaPreguntas = await prompts(preguntasMoto);
    const nuevoRegistroMoto = {
        id: id,
        Modelo: respuestaPreguntas.Modelo,
        Color: respuestaPreguntas.Color,
        Precio: respuestaPreguntas.Precio,
        Fuerza: respuestaPreguntas.Fuerza,
        Marca: respuestaPreguntas.Marca
    };

    id = id + 1;
    arregloMotos.push(nuevoRegistroMoto);
    queDeseaHacer().then().catch();

};
async function queDeseaHacer(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: 'Seleccione la opción que desea realizar \n 1-Crear otro registro \n 2-Leer los registros actuales \n 3-Actualizar datos \n 4-Eliminar registros \n 5-SALIR'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        crearDatosMotos().then().catch();
        
    }else if(respuesta1 == 2){
        leerRegistros().then().catch();

    }else if(respuesta1 == 3){
        editarRegistro().then().catch();

    }else if(respuesta1 == 4){
        eliminarRegistro().then().catch();

    }else if(respuesta1 == 5){
        console.log('Adios vuelve pronto');
    }else{
        console.log('Elija una opcion valida');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('Registro de Motos:', arregloMotos);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const AidAEditar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el id de la Moto cuya informacion desea cambiar'
    });
    const AidEncontrado = arregloMotos.findIndex(
        function(valorActual){
        return valorActual.id == AidAEditar.Aid
        }
    );
    const queDeseaEditar = await prompts({
        type: 'text',
        name: 'campoAEditar',
        message: '¿Que campo desea cambiar?'
    });

    const respuestaCampo = queDeseaEditar.campoAEditar;
    if(respuestaCampo == 'Modelo'){
        const nuevoModelo = await prompts({
            type: 'text',
            name: 'nuevoModelo',
            message: 'Ingrese el modelo de la nueva moto'
        });
        arregloMotos[AidEncontrado].Modelo = nuevoModelo.nuevoModelo;
    }else if(respuestaCampo == 'Color'){
        const nuevoColor = await prompts({
            type: 'text',
            name: 'nuevoColor',
            message: 'Ingrese el color de la nueva Moto'                 
        });
        arregloMotos[AidEncontrado].Color = nuevoColor.nuevoColor;
    }else if(respuestaCampo == 'Precio'){
        const nuevoPrecio = await prompts({
            type: 'number',
            name: 'nuevoPrecio',
            message: 'Ingrese el nuevo Precio en el mercado'
        });
        arregloMotos[AidEncontrado].Precio = nuevoPrecio.nuevoPrecio;
    }else if(respuestaCampo == 'Fuerza'){
        const nuevaFuerza = await prompts({
            type: 'number',
            name: 'nuevaFuerza',
            message: 'Ingrese los nuevos caballos de Fuerza que tiene la moto'
        });
        arregloMotos[AidEncontrado].Fuerza = nuevaFuerza.nuevaFuerza;
    }else if(respuestaCampo == 'Marca'){            
        const nuevaMarca = await prompts({
            type: 'text',
            name: 'Marca',
            message: 'Ingrese la nueva marca de la moto'
        });
        arregloMotos[AidEncontrado].Marca = nuevaMarca.Marca;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de Motos actualizado es:', arregloMotos);
    queDeseaHacer().then().catch();
    return arregloMotos
};
///
async function eliminarRegistro(){
    const AidAEliminar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id de la moto cuya informacion desea eliminar'
    });
    const AidEncontrado = arregloMotos.findIndex(
        function(valorActual){
        return valorActual.id == AidAEliminar.Aid
        }
    );
    arregloMotos.splice(AidEncontrado, 1);
    console.log('El nuevo registro de la Moto es:', arregloMotos);
    queDeseaHacer().then().catch();
    return arregloMotos
}

function main(){
    crearDatosMotos().then().catch();

}

main();
