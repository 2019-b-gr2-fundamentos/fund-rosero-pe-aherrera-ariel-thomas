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

