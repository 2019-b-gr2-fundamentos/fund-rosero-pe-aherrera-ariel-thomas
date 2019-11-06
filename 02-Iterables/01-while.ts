//DO WHILE
let vecesQueHeComido = 0;
do {
    console.log("Vamos a comer");
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
        console.log("Desayuno");
        break;
        case 2:
        console.log("Almuerzo");
        break;
        case 3:
        console.log("Merienda");
        break;
        default:
        console.log("Gordito");
    }
} while ( vecesQueHeComido < 3 ) {
    vecesQueHeComido = 0;
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
        console.log("Desayuno");
        break;
        case 2:
        console.log("Almuerzo");
        break;
        case 3:
        console.log("Merienda");
        break;
        default:
        console.log("Gordito");
}  
}
/* 
1   Analisis socieconómico y político
2   Algebra Lineal 
3   Compiladores
5   Fundamentos de Programación
7   Calculo
11  Fisica
13  Ingles

Si el numero es impar -> aumentamos a analisis socioeconómico 
Si es par -> aumentamos a algebra 
Si es multiplo de 3 -> aumentamos a compiladores 
hasta 50. 17, 17, 16

*/
let analisis = 0;
let Algebra = 0;
let Compiladores = 0;
let numeroDeDeberes = 0;

do {
numeroDeDeberes = numeroDeDeberes + 1;
    if (numeroDeDeberes % 3 == 0) {
        Compiladores = Compiladores +1 ;

    } else if (numeroDeDeberes % 2 == 0) {
        Algebra = Algebra + 1;

    } else if (numeroDeDeberes % 2 !== 0 ) {
        analisis = analisis + 1;

    } else {
        console.log("No se tiene deberes");
    }

} while (numeroDeDeberes < 50);

console.log(`Hice ${Compiladores} deberes de Compiladores`)
console.log(`Hice ${Algebra} deberes de Algebra`)
console.log(`Hice ${analisis} deberes de Análisis`)

//console.log("Hice ${analisis} deberes de analisis")
// template strings --> tilde invertida = alt + 96


