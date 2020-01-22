// 02-crud.ts create read update delete
//const prompts = require('prompts');

import * as prompts from 'prompts';
import { RespuestaNombre } from './Interfaces/respuesta_nombre.interface';
import { RespuestaEdad } from './Interfaces/respuesta_edad.interface';

function main() {
    //npm uninstall -g tsc -> Windows
    //npm install -g typescript -> Windows
    //obtenerDatosAnimalPerrito();  //Asincrona
    obtenerDatosAnimalPerritoSincrono()
    .then()
    .catch(); // --> Sincrona / Promesa

}

function obtenerDatosAnimalPerrito(){
    //Paradigmas de Porgramación
    console.log('Inicio');
    const promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    })
    console.log(promesaEdad);
    promesaEdad
    .then( //OK
        (datos)=>{
            console.log('datos',datos); //Aqui puedo seguir
            ////
            const promesaNombre = prompts({
                type: 'text',
                name: 'nombre',
                message: 'Puedes darme tu nombre?'
            })
            promesaNombre
            .then( //OK
                (datos)=>{
                    console.log('Nombre',datos); //Aqui puedo seguir
                }
            )
            .catch( // =(
                (error)=>{
                    console.log('Error',error);
                }
            )
            console.log('Fin');
        }
            ///

    )
    .catch( // =(
        (error)=>{
            console.log('Error',error);
        }
    )

    console.log('Fin');

}

main();

async function obtenerDatosAnimalPerritoSincrono(){
    //Paradigmas de Porgramación
    console.log('Inicio');
    const preguntas = [ 
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type: 'text',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
        }
    
    ];
    const respuestaEdad = await prompts(preguntas);
    console.log('Respuesta',respuestaEdad);
    console.log('Fin');

}



