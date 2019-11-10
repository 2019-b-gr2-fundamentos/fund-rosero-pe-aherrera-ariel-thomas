/*
1   Analisis socieconómico y político del Ecuador
2   Algebra Lineal
3   Compiladores
5   Fundamentos de Programación
7   Calculo
11  Fisica
13  Ingles
*/
// Programa para saber cuantos deberes hiceron del 1 al 1000
var analisis = 0;
var algebra = 0;
var compiladores = 0;
var fundamentos = 0;
var calculo = 0;
var fisica = 0;
var ingles = 0;
var deberes = 0;
do {
    deberes = deberes + 1;
    if (deberes % 13 == 0) {
        ingles = ingles + 1;
    }
    else if (deberes % 11 == 0) {
        fisica = fisica + 1;
    }
    else if (deberes % 7 == 0) {
        calculo = calculo + 1;
    }
    else if (deberes % 5 == 0) {
        fundamentos = fundamentos + 1;
    }
    else if (deberes % 3 == 0) {
        compiladores = compiladores + 1;
    }
    else if (deberes % 2 == 0) {
        algebra = algebra + 1;
    }
    else if (deberes % 2 != 0) {
        analisis = analisis + 1;
    }
    else {
        console.log("Usted no tiene deberes");
    }
} while (deberes < 1000);
console.log("Hice " + analisis + " deberes de An\u00E1lisis socioecon\u00F3mico y politico del Ecuador");
console.log("Hice " + algebra + " deberes de Algebra Lineal");
console.log("Hice " + compiladores + " deberes de Compiladores");
console.log("Hice " + fundamentos + " deberes de Fundamentos de la Programaci\u00F3n");
console.log("Hice " + calculo + " deberes de Calculo en una Variable");
console.log("Hice " + fisica + " deberes de Fisica 1");
console.log("Hice " + ingles + " deberes de Ingles");
