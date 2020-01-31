"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_filter_1 = require("./02-filter");
var _05_Some_1 = require("./05-Some");
var _04_forEach_1 = require("./04-forEach");
var _05_Every_1 = require("./05-Every");
function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Adrian", nota: 7 },
        { id: 2, nombre: "Vicente", nota: 9 },
        { id: 3, nombre: "Wendy", nota: 4 },
        { id: 4, nombre: "Carolina", nota: 10 },
        { id: 5, nombre: "Carlos", nota: 6.5 }
    ];
    //ORADOR FOREACH
    //Enviamos -> Nada
    //Recibimos -> Nada
    var respuestaForEach = arregloEstudiantes
        .forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
    });
    console.log(respuestaForEach); //undefined
    //MAP -> Transformar o mutar el arreglo. 
    //Recibir -> Nuevo arreglo con valores modificados. Es muy utíl en los arreglso
    var respuestaMap = arregloEstudiantes
        .map(function (valorActual, i, arreglo) {
        var nuevoObjecto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
        return nuevoObjecto;
    });
    console.log('Respuesta MAP', respuestaMap);
    console.log('arregloEstudiantes', arregloEstudiantes);
    //Filter -> Filtra el arreglo
    //Enviamos -> Condicion
    //Recibir -> Nuevo arreglo con valores filtrados
    var respuestaFilter = arregloEstudiantes
        .filter(function (valorActual, indice, arreglo) {
        var condicion7 = valorActual.nota > 7;
        var condicion5 = valorActual.nota < 5;
        return condicion7 || condicion5;
    });
    console.log('RespuestaFilter', respuestaFilter);
    console.log('arregloEstudiantes', arregloEstudiantes);
    //AND -> every(Todos cumplan)  / OR -> some(Uno cumpla)
    //SOME -> Devulve verdadero o falso, dependiendo de la condición
    //  Si alguno cumple devulve true 
    //  Si ninguno cumple devuelve false
    //Enviamos -> Condicion
    //Recibimos -> Booleano
    var respuetaSome = arregloEstudiantes
        .some(function (valorActual, indice, arreglo) {
        var condicion = valorActual.nota < 7;
        //Condicion Truty o true
        return condicion;
    });
    console.log('RespuestaSome', respuetaSome);
    console.log('arregloEstudiantes', arregloEstudiantes);
    //Every -> Devulve verdadero o falso, dependiendo de la condición
    //  Si todos cumplen la condicion true 
    //  Si alguno no cumple la condicon false
    //Enviamos -> Condicion
    //Recibimos -> Booleano
    var respuestaEvery = arregloEstudiantes
        .every(function (valorActual) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    console.log('RespuestaEvery', respuestaEvery);
    console.log('arregloEstudiantes', arregloEstudiantes);
    //Reduce -> Devulve un valor con el calculo aplicado
    //Enviamos -> Calculo
    //Recibimos -> Valor
    var respuestaReduce = arregloEstudiantes
        .reduce(function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0 //valor inicial del acumulador
    );
    console.log('RespuestaReduce', respuestaReduce);
    console.log('Promedio', respuestaReduce / arregloEstudiantes.length);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaFilterNuestro = _02_filter_1.filter(arregloEstudiantes, function (valorActual, i, arr) {
        console.log('Valor:', valorActual);
        console.log('Indice: ', i);
        console.log('Arreglo: ', arr);
        return valorActual.nota >= 7;
    });
    console.log('RespuestaFilterNuestro', respuestaFilterNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaEveryNuestro = _05_Every_1.Every(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual.nota >= 3;
    });
    console.log('RespuestaEveryNuestro', respuestaEveryNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaForEachNuestro = _04_forEach_1.forEach(arregloEstudiantes, function (valorActual, i, arr) {
        console.log(valorActual.nota);
    });
    console.log('RespuestaForEachNuestro', respuestaForEachNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
    var respuestaSomeNuestro = _05_Some_1.Some(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual.nota <= 4;
    });
    console.log('RespuestaSomeNuestro', respuestaSomeNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
}
main();
