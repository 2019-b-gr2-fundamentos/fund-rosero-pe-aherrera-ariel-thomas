// en inlges se llama scode
var edad = 30;
if (true) {
    var edad_1 = 30;
    console.log(edad_1);
    console.log("Legal");
    if (edad_1) {
        console.log(edad_1);
        if (edad_1) {
            console.log(edad_1);
        }
        else {
            console.log(edad_1);
        }
    }
    else {
        console.log(edad_1);
    }
}
else {
    console.log(edad); //undefinded 
    console.log("7 años de carcel");
}
//El alcance no es local y global. estan dentro de muchos bloques de codigo 
//Se tiene 6 bloques de código
var bandera = 0;
for (var i = 0; i < 10; i++) {
    bandera = bandera + i;
    console.log(bandera);
}
console.log(bandera);
if (true) {
    var bandera_1 = 0;
    for (var i = 0; i < 10; i++) {
        bandera_1 = bandera_1 + i;
        console.log(bandera_1);
    }
    console.log(bandera_1);
}
else {
}
var arregloFloron = [0, 0, 1, 0, 0];
var existeFloron = false;
for (var i = 0; i < 5; i++) {
    if (arregloFloron[i] == 1) {
        existeFloron = true;
    }
}
arregloFloron[i];
if (existeFloron) {
    console.log("Adivinar");
}
else {
    console.log("Asignar y luego Adivinar");
}
