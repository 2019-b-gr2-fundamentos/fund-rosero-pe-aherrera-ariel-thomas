const casado = true;
if(casado == true) {
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}


if(casado == false) { //(Expresión => boolean)
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}

if(casado != true){
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}

if(casado != false){
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

const tengoMosa = false;
const estaCasado = casado == true; //expresion 
const soyMosero = tengoMosa == true; 
const casadoYMosero = estaCasado && soyMosero;
if(casadoYMosero){
    console.log("casado y mosero");
} else {
    console.log("O casado o Mosero o Nada"); 
}

//AND --> && Amperset
//True y Treu = True
//True y False = False
//False y True = False
//False y False = False

//OR --> || -> Pipes 
//True y True = True
//True y False = True
//False y True = True
//False y False = False

/*

Apago la primera alarma me hago
bolita y lloro hasta la segunda
alarma y me levanto 
CelularDescargado == true
celularDañado == true
amaneceMuerto == true
EstaActivadaLaAlarma != true
estaEnModoSilencio == true 
const seAtrasoAClase == CelularDescargado == true || celularDañado == true || amaneceMuerto == true || EstaActivadaLaAlarma != true || estaEnModoSilencio == true 

Si tengo el celular descargado o tengo el celular dañado o amanesco muerto o no esta activada la alarma o el celular esta en modo cilencio
yo llego atrasado a clase si no llego normalmente a clases.

Si se atrasa a clase 
imprimir "Se pone a llorar"
si no 
imprimir "Esta feliz"


if(seAtrasoAClase){
    console.log("Se pone triste")
} esle {
    console.log("Se pone feliz")
}
*/

/*
Programa en clase
¿Qué operación debe hacer?
Si necesita sumer -> Press 1
Si se escogio 1
Imprimir Resulato
Si necesita restar -> Press 2
Si se escogio 2
Imprimir Resultado
Si necesita Multiplicar -> Press 3
Si se escogio 3
Imprimir Resultado
Si necesita dividir -> Press 4
Si se escogio 4 
Imprimir resultado
Si necesita sacar el volumen de la esfera -> Press 5
Imprimir resultado
Fin
*/

//TRUTY :
const nombreVacio = "";
if(""){ //No necesitan estar igualados a nada
    console.log("Truty");
} else {
    console.log("Falsy");
}

if("abc"){
    console.log("Truty"); //Si un String esta lleno de algo es Truty
} else {
    console.log("Falsy");
}

if(-1){
    console.log("Truty"); //Truty
} else {
    console.log("Falsy");
}

if(1.3232){
    console.log("Truty"); //Truty
} else {
    console.log("Falsy");
}

if(0){
    console.log("Truty"); //Falsy
} else {
    console.log("Falsy");
}

if(null){
    console.log("Truty"); //Falsy
} else {
    console.log("Falsy");
}

if(undefined){
    console.log("Truty"); //Falsy
} else {
    console.log("Falsy");
}

const calculo = ""; //sumar restar multiplicar divivdir
switch(calculo) {
    case "sumar": // compara 1 vez
        break;
    case "restar": //2
        break;
    case "multiplicar": //3
        break; 
    case "dividir": //4
        break;
    default:

}

/*const edadString = prompt("Ingresar numero");
const edad = Number(edadString);
switch(edad) {
    case edad > 0 && edad <= 6:
        console.log("Usted es Guagua")
        break;
}
*/

const edadString = prompt("Ingrese su edad ")
const edad = Number(edadString);
if(edad >=0 && edad<=6) {
console.log("Guagua");
} else if (edad >6 && edad<=18) {
console.log("Guambra");
} else if (edad>18 && edad<=65 ) {
console.log("Longo");
} else if (edad>65 && edad<=100) {
console.log("Ruko");    
} else if (edad>100) {
console.log("Usted ya fallecio");
} else {
console.log ("Usted aun no nace");
}


//6 Guagua 
//18 Guambra
//65 Longo
//66 Ruku

// FALSY : 



