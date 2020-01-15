// 02-crud.ts create read update delete
//const prompts = require('prompts');

import * as prompts from 'prompts';

function main() {
    obtenerDatosAnimalPerrito();
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
