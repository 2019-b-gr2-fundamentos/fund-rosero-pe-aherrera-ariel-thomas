/* JUEGO
1) Crear arreglo de 5 elementos
2) cada elemento 1 o un 0
Ej: [0,0,1,1,0]
3) Exista al menos un elemento "1"
Ej: [0,0,0,0,0,0] No es Valido
Ej: [0,0,0,0,0,1] Es Valido 
*/

const numeroDeJugadores = 5;

for ( const arreglo = []; arreglo.push(Math.floor(Math.random() * 2)) <= numeroDeJugadores;) {
    console.log(arreglo);
}



//Math.floor(Math.random() * 2) //[0,2[
//Math.floor(Math.random() * 10) //[0,11[