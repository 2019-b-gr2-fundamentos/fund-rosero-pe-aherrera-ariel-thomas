//NODE MODULES
//const sumaLibreria = require(`librerias_ariel/lib/suma`);
//Importar todo el contenido con el nombre "sumalibreria" del paquete librerias_ariel/lib/suma
import * as sumaLibreria from 'librerias_ariel/lib/suma';
const respuesta = sumaLibreria(1,2);
console.log(`La respuesta es: `,respuesta);

import * as PI from 'operaciones-basicas-calculadora/lib/pi';
console.log(`La constante pi es: `,PI);


//PARTE DEL Trabajo en clase
import * as sumaLibreria1 from 'operaciones-basicas-calculadora/lib/suma';

const R1 = sumaLibreria1(9,8);
console.log(`La respuesta es: `,R1);

import * as restaLibreria1 from 'operaciones-basicas-calculadora/lib/resta'

const R2 = restaLibreria1(9,8);
console.log(`La respuesta es: `,R2);

import * as multiplicacionLibreria1 from 'operaciones-basicas-calculadora/lib/Multiplicación'

const R3 = multiplicacionLibreria1(9,8);
console.log(`La respuesta es: `,R3);

import * as divisionLibreria1 from 'operaciones-basicas-calculadora/lib/División'

const R4 = divisionLibreria1(72,8);
console.log(`La respuesta es: `,R4);

import * as teoremaLibreria1 from 'operaciones-basicas-calculadora/lib/VolumenCono'

const R5 = teoremaLibreria1(3,4);
console.log(`La respuesta es: `,R5);

import * as porcentajeLibreria1 from 'operaciones-basicas-calculadora/lib/porcentajes'

const R6 = porcentajeLibreria1(50,20);
console.log(`La respuesta es: `,R6);

import * as energiaPotencialLibreria1 from 'operaciones-basicas-calculadora/lib/EnergiaPotencialG'

const R7 = energiaPotencialLibreria1(10,2);
console.log(`La respuesta es: `,R7);


