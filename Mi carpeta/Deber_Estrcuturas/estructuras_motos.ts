import * as prompts from './node_modules/prompts'
import {Moto} from './Interfaces/moto.interface'

async function motos(){

    const arregloMotos: Moto[]= [];
    const preguntas = [
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

    ] 
    
    async function agregarMoto(){
        let informacionMotos: Moto = await prompts(preguntas)
        arregloMotos.push(informacionMotos)
        opciones();
    }

    async function editarMotos(){
        let indice = await prompts({
            type: 'number',
            name: 'indice',
            message: 'Inserte el indice de la caracteristica de la moto que quiere editar'
        })

        if (indice.indice < arregloMotos.length){
            let caracteristicaAeditar = await prompts({
                type: 'text',
                name: 'caracteristica',
                message:'¿Que desea editar?' 
        })

        if 
        (caracteristicaAeditar.caracteristica == 'Modelo'
        || caracteristicaAeditar.caracteristica == 'Color'
        || caracteristicaAeditar.caracteristica == 'Precio' 
        || caracteristicaAeditar.caracteristica == 'Fuerza'
        || caracteristicaAeditar.caracteristica == 'Marca'){
        let nuevoValor = await prompts({
            type: 'text',
            name: 'valor',
            message: '¿Que desea insertar?'
         })   

         let MotoElegida = arregloMotos[indice.indice]
                switch (caracteristicaAeditar.caracteristica){
                    case 'Modelo':
                        MotoElegida.Modelo = nuevoValor.valor
                        break;
                    case 'Color':
                        MotoElegida.Color = nuevoValor.valor
                        break;
                    case 'Precio':
                        MotoElegida.Precio = nuevoValor.valor
                        break;
                    case 'Fuerza':
                        MotoElegida.Fuerza = nuevoValor.valor
                        break; 
                    case 'Marca':
                        MotoElegida.Marca = nuevoValor.valor
                        break;     
        }
        opciones();

        } else {
            console.log('La caracteristica indicada no existe');
            editarMotos()
               } 
        } else {
            console.log('El indice ingresado no existe, intente nuevamente');
            editarMotos()
               }
        };

    async function opciones(){
        let opciones = await prompts({
            type: 'text',
            name: 'eleccion',
            message: 'Insertar nueva moto --> 1 || Editar una moto que ya existe --> 2 || Eliminar --> 3 || Salir -> 4 '
    });

    switch(opciones.eleccion){    
        case '1':
            agregarMoto();
            break;
        case '2':
            editarMotos();
            break;  
        case '3':
            console.log(arregloMotos)  
            break; 
        case '4':
            console.log("Gracias por su visita")  
            break; 
        default:
            console.log('La opción0 no es valida, intente de nuevo') 
            opciones();
            break;
    }
    }

    agregarMoto();  
};
motos();
