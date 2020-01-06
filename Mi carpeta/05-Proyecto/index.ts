//NODE MODULES
//const sumaLibreria = require(`librerias_ariel/lib/suma`);
//Importar todo el contenido con el nombre "sumalibreria" del paquete librerias_ariel/lib/suma
import * as sumaLibreria from 'librerias_ariel/lib/suma';

const respuesta = sumaLibreria(1,2);
console.log(`La respuesta es: `,respuesta);

