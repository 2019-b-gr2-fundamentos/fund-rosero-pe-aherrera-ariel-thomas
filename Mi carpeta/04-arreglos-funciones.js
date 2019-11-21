var arregloNumeros = [1, 2, 3, 4, 5, 9, 7, 8, 9, 10];
//Acceder 
//Necesito un Indice 
console.log(arregloNumeros[6]); //7
//Añadir al final
//Necesito un elemento a añadirse
arregloNumeros.push(11);
//Borrar al final
arregloNumeros.pop();
//Añadir 
//Necesito: Indice   Splice añadir un elemento en cualquier parte del arreglo
//          Elemento
arregloNumeros.splice(0, 0, 1.2);
console.log(arregloNumeros);
//o Borrar
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);
//Buscar Indice de un elemento¡¡¡ :D
console.log(arregloNumeros.indexOf(5)); //5
console.log(arregloNumeros.indexOf(7));
console.log(arregloNumeros.indexOf(9));
arregloNumeros[0] = 999;
console.log(arregloNumeros);
/* Seudocòdigo
1) Crear un arreglo
2) Saber los Indices y sus respectivos elementos
3) Colocar el indice y el elemento a cambiar
4) Fin
*/
