//NODE MODULES
//const sumaLibreria = require(`librerias_ariel/lib/suma`);
//Importar todo el contenido con el nombre "sumalibreria" del paquete librerias_ariel/lib/suma
var sumaLibreria = require('librerias_ariel/lib/suma');
var respuesta = sumaLibreria(1, 2);
console.log("La respuesta es: ", respuesta);
var PI = require('operaciones-basicas-calculadora/lib/pi');
console.log("La constante pi es: ", PI);
//PARTE DEL Trabajo en clase
var sumaLibreria1 = require('operaciones-basicas-calculadora/lib/suma');
var R1 = sumaLibreria1(9, 8);
console.log("La respuesta es: ", R1);
var restaLibreria1 = require('operaciones-basicas-calculadora/lib/resta');
var R2 = restaLibreria1(9, 8);
console.log("La respuesta es: ", R2);
var multiplicacionLibreria1 = require('operaciones-basicas-calculadora/lib/Multiplicación');
var R3 = multiplicacionLibreria1(9, 8);
console.log("La respuesta es: ", R3);
var divisionLibreria1 = require('operaciones-basicas-calculadora/lib/División');
var R4 = divisionLibreria1(72, 8);
console.log("La respuesta es: ", R4);
var teoremaLibreria1 = require('operaciones-basicas-calculadora/lib/VolumenCono');
var R5 = teoremaLibreria1(3, 4);
console.log("La respuesta es: ", R5);
var porcentajeLibreria1 = require('operaciones-basicas-calculadora/lib/porcentajes');
var R6 = porcentajeLibreria1(50, 20);
console.log("La respuesta es: ", R6);
var energiaPotencialLibreria1 = require('operaciones-basicas-calculadora/lib/EnergiaPotencialG');
var R7 = energiaPotencialLibreria1(10, 2);
console.log("La respuesta es: ", R7);
