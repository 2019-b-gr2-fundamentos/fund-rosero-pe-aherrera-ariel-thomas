//NODE MODULES
//const sumaLibreria = require(`librerias_ariel/lib/suma`);
//Importar todo el contenido con el nombre "sumalibreria" del paquete librerias_ariel/lib/suma
var sumaLibreria = require('librerias_ariel/lib/suma');
var respuesta = sumaLibreria(1, 2);
console.log("La respuesta es: ", respuesta);
