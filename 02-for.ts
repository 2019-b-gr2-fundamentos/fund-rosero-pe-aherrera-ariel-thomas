//for
// !) Declarar una variable
// 2) Condicion (Expresiones)
// 3) INCREMENTAR O DISMINUIR

for (let numeroExDeMiCrush = 7; numeroExDeMiCrush > 0; numeroExDeMiCrush--) {
    console.log('ES CAN DA LO', numeroExDeMiCrush);
// !=0 o >= 0 (No) o >0
}

for (let numeroExDeMiCrushEscandalisados = 0; numeroExDeMiCrushEscandalisados < 7; numeroExDeMiCrushEscandalisados++) {
    console.log('ES CAN DA LO 1', numeroExDeMiCrushEscandalisados);
// !=0 o >= 0 (No) o >0
}

for (let numeroExDeMiCrushEscandalizados = 0; numeroExDeMiCrushEscandalizados <= 6; numeroExDeMiCrushEscandalizados++) {
    console.log('ES CAN DA LO 2', numeroExDeMiCrushEscandalizados);
// !=0 o >= 0 (No) o >0
}

//For es mas utilizado para iterar el objeto arreglo 

//ARREGLOS
// 1 elemento ( variable const´numero = 1)
// Conjunto del MISMO ELEMENTO ( [1,2,3,4,5] )
// Se pude utilizar arreglos de distintos elementos con arreglos 
// depende del lenguaje

// Conjunto diferentes elementos { [1, "abc", true]}

const arregloNumeros = [1, 2, 3, 4, 5];
// Reasignar 
// arregloNumeros = [1,2,3,4,5,6]; No se puede aumentar un elemento así 
arregloNumeros.push(6); //FUNCION
console.log('arregloNumeros' , arregloNumeros);

arregloNumeros.pop();
console.log('arregloNumeros' , arregloNumeros);
/* Arreglo
 1) Elementos
 2) Indices (0 index based) -> Posición
 3) Longitud -> # Elementos 
*/
console.log(arregloNumeros.length);

/* FOR
1) let tamaño = arregloNumeros.length  //Numero entero 5
2) tamaño > 0 
3) --
*/

//Acceder a cada elemento del Arreglo por el Indice
const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno]; //1
arregloNumeros [0]; //1
const indiceElementoCinco = 4; //5
arregloNumeros[indiceElementoCinco]; //5
arregloNumeros [5]; //1

//Acceder al elemento 5
// 1) Indice
// [1,2,3,4,5]
//  0 1 2 3 4
// Indices
console.log("Acceder al elemento 5");
console.log(arregloNumeros[indiceElementoCinco]);

//for (let tamaño = arregloNumeros.length ; tamaño > 0 ; arregloNumeros.length) {
//    console.log(  )
//}

