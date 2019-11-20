// en inlges se llama scode
let edad = 30;
if(true) { //Bloque 1
    let edad = 30;
    console.log(edad);
    console.log("Legal");
    if(edad) { //Bloque 2
        console.log(edad);
        if(edad) { //Bloque 3
            console.log(edad);
        } else { //Bloque 4
            console.log(edad);
        }
    } else { //Bloque 5
        console.log(edad);
    }
} else { //Bloque 6
    console.log(edad); //undefinded 
    console.log("7 años de carcel");
} 

//El alcance no es local y global. estan dentro de muchos bloques de codigo 
//Se tiene 6 bloques de código

let bandera = 0;
for(let i=0; i<10; i++){
    bandera = bandera + i;
    console.log(bandera);
}
console.log(bandera);

if(true){
    let bandera = 0;
for(let i=0; i<10; i++){
    bandera = bandera + i;
    console.log(bandera);
}
console.log(bandera);

} else {

}

let arregloFloron = [0,0,1,0,0];
let existeFloron = false;
for(let i=0; i<5; i++) { //Bloque 1

    if(arregloFloron[i] == 1) { //Bloque 2 
        existeFloron = true;
    } 
    }
    
    arregloFloron[i]
}

if(existeFloron) { //Bloque 3
    console.log("Adivinar");
} else { //Bloque 4 
    console.log("Asignar y luego Adivinar")
}
