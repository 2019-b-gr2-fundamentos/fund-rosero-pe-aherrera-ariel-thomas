console.log("\n Saber las consecuencias de manejar con cierto grado de alcohol en la sangre\n");
const g1String = prompt("Ingrese el numero de botellas Pilsener que consumio: ");
const g1 = Number(g1String);
let gradodealcohol;
gradodealcohol = g1 * 0.252 // 0.252 gramos por litro y se esta tomando
// en cuenta que la botella Pilsener que se consume es de 600 cc, 
// y por su puesto que se acabe una botella una sola persona.

if(gradodealcohol<=0.2 && gradodealcohol>0){
    console.log("Conduzca tranquilo que no ha tomado lo suficiente"); 
} else if(gradodealcohol>=0.3 && gradodealcohol<=0.8){
console.log("Multa de 1 SBU (Salario básico Unificado) \n -5 puntos en la licencia \n 5 días de privación de libertad"); 
}
else if(gradodealcohol>0.8 && gradodealcohol<=1.2){
console.log("Multa de 2 SBU \n -10 Puntos en la Licencia \n 15 días de privación de libertad");
}
else if(gradodealcohol>1.2 && gradodealcohol<2){
console.log("Multa de 3 SBU \n Suspención de licencia 60 días \n 30 días de privación de libertad");    
} else if(gradodealcohol>2) {
    console.log("Ni se le ocurra conducir así, porque puede llegar a matarse");
} else {
    console.log("No existe un grado de alchohol en la sangre negativo -_-")
}

