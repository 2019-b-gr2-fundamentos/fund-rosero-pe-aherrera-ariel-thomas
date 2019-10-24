const numeroUno = 1; //camelCase
const numeroDos = 2;
let resultado = 0;
//Suma
resultado = 1 + 2;
//Resta 
resultado = 1 - 2;
//Multiplicar 
resultado = 1 * 2;
//División
resultado = 1 / 2;
//Exponencial
resultado = 1 ^ 2;
//Mod
resultado = 4 % 2; //0 -->Residuo 
resultado = 4 % 3; //1
resultado = 7 % 3; //1
console.log("pera" + 2);
//const COLOR_ROJO = 1; //camelCase
//Tipos de Notación de como escribir las variables. ¿Qué notación se usa en cada lenguaje?
//NUMEROUNO -> Todo MAYUSCULAS (Separacion No)
//Numero_Uno ->Mayusculas guion bajo
//NumeroUno -> 
//numerouno
//numero_uno
//numerOuno -> 
//STRINGS
const mensaje = "\"Hola mundo\"";
const saludo = '\'Adio\s Mundo\'';
console.log(mensaje + "1\t\t\t 3\n" + saludo);
//Template strings
const edad = 30;
const saludoEdad = `Mi edad es: ${edad}`;
console.log(saludoEdad);
const saludoCompleto = `${mensaje}\n${saludo}`;
console.log(saludoCompleto);
//Contamos los elementos
const nombreLongitud = "Ariel Thomàs";
console.log(nombreLongitud.length);
//Eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
//Cambiar a Mayusculas
console.log(nombreLongitud.toUpperCase());
//console.log(nombreLongitud.toLowerCase());
//console.log(nombreLongitud.replace("e","o"));
//console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("x", "o"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("a", "o"));
console.log(nombreLongitud);
console.log(nombreLongitud.search("z")); //-1
console.log(nombreLongitud.search("e")); // Si encuentra me dice la posiciòn en la que se encuentra
console.log(nombreLongitud.slice(0, 5));
console.log(nombreLongitud.indexOf("a")); //
console.log(nombreLongitud.indexOf("x")); //
console.log(nombreLongitud.includes(" ")); // booleano
console.log(nombreLongitud.includes("x")); // booleano
console.log(nombreLongitud.endsWith("x")); //booleano
console.log(nombreLongitud.startsWith("vice")); //booleano
console.log(nombreLongitud.substring(0, 5)); //
