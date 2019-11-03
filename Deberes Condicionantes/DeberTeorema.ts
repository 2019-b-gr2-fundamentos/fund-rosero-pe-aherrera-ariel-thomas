//Programa que alla la hipotenusa de un triangulo rectangulo
//En otras palabaras el Teorema de Pitágoras y una calculadora
//con las operaciones básicas

console.log("¡Bienvedido!.Este es un menu de las operaciones básicas");
console.log("1. Sumar");
console.log("2. Restar");
console.log("3. Multiplicar");
console.log("4. Dividir");
console.log("5. Teorema de Pitágoras");
console.log("6 Salir");

const OBString = prompt("Ingrese la operacion deseada: ");
const OB = Number(OBString);
let resultado
switch(OB){
    case (1):
        const numeroString = prompt("Ingrese el primer numero: ");
        const numero = Number(numeroString);
        const numero2String = prompt("Ingrese el segundo numero: ");
        const numero2 = Number(numero2String);
        resultado = numero + numero2;
        console.log("El resultado es igual a : ");
        console.log(resultado);
        break;
    case (2):
        const numero3String = prompt("Ingrese el primer numero: ");
        const numero3 = Number(numero3String);
        const numero4String = prompt("Ingrese el segundo numero: ");
        const numero4 = Number(numero4String);
        resultado = numero3 - numero4;
        console.log("El resultado es igual a : ");
        console.log(resultado);
        break;
    case (3):
            const numero5String = prompt("Ingrese el primer numero: ");
            const numero5 = Number(numero5String);
            const numero6String = prompt("Ingrese el segundo numero: ");
            const numero6 = Number(numero6String);
            resultado = numero5 * numero6;
        console.log("El resultado es igual a: ");
        console.log(resultado);
        break;
    case (4):
            const numero7String = prompt("Ingrese el primer numero: ");
            const numero7 = Number(numero7String);
            const numero8String = prompt("Ingrese el segundo numero: ");
            const numero8 = Number(numero8String);
            resultado = numero7 / numero8;
        console.log("El resultado es igual a : ");
        console.log(resultado);
        break;
    case (5):
        console.log("Se va a tratar esta operación de la forma h^2 = a^2 (lado adyacente) + b^2 (lado opuesto)");
        const numero9String = prompt("Ingrese el lado adyacente: ");
        const numero9 = Number(numero9String);
        const numero10String = prompt("Ingrese el lado opuesto numero: ");
        const numero10 = Number(numero10String);
        resultado = Math.sqrt((Math.pow(numero9,2)) + (Math.pow(numero10,2)));
        console.log("La hipotenusa del triangulo es igual a : ");
        console.log(resultado);
        break;
    case (6):
        console.log("HASTA LUEGO");
        break;
    default:
        console.log("Revise que el numero ingresado sea alguna de las opciones");
}
