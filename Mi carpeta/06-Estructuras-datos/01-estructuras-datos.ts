// boolean
// string
// null --> object
// number 
// PERSONA
// ANIMAL -> nombre científico, color principal 
// fecha nacimiento, peso, genero, altura 

// Casi en todos los lenguajes 
// struct -> Estructura de Datos
// Otra manera de definirlo: Clase -> Estructura de Datos -> Metodos!
// un json es una estructura de datos
import {AnimalPerrito} from './Interfaces/animal_perrito.interface'
import { Duenio } from './Interfaces/duenio.interface';

const edad = 20;
const ejemploEstructura = {
    nombreCientífico: `canis lupus familiaris`,  //No es necesario utilizar comillas dobles para las llaves
    "llave": "valor",
    noEsNecesario: true, //Se puede colocar la última coma
    enojo: undefined,
    poliPerro: edad //variables 
}
//Estructura de datos en lenguaje NO TIPADO
const poliPerro = {
    nombreCientifico: `canis lupus familiaris`,
    nombre: `Grandote`,
    clan: `PoliPerro`,
    edad: 10,
    hijos: null,
    perritas: [`Manuela`, `Zoraida`],
    vacunado: true,
}
console.log(poliPerro.nombre); //Canis lupus familiaris

//Estructura de datos en Lenguaje TIPADO
const poliPerroAmarrillo: AnimalPerrito = {
    nombreCientifico: `canis lupus familiaris`, //Dentro del animal perrito no tenemmos los hijos por eso sale error
    nombre: `Amarillo`,
    clan: null,                       // A cualquier dato le puedo poner nulo y sigue cumpliendo con la ED
    //edad: 4,
    //hijos: null,
    //perritas: [],
    //vacunado: false,
} 

const duenioPoliPerroAmarrillo: Duenio = {
    nombre: 'Adrian',
    apellido: '',
    fechaNacimiento: 2,
    cedula: ,
    mascotasPerro: [ poliPerroAmarrillo ]

}

//Acceder a los datos de una estructura de datos
poliPerroAmarrillo.duenio = duenioPoliPerroAmarrillo;
poliPerroAmarrillo.edad = 4;
poliPerroAmarrillo.vacunado = true;
console.log(poliPerroAmarrillo.duenio.nombre);
console.log(poliPerroAmarrillo.duenio.apellido);
console.log(poliPerroAmarrillo.nombre);
console.log(poliPerroAmarrillo.edad);

