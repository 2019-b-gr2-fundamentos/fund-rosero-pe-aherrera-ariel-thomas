console.log("\nSaber si pasaste el semestre, te quedas a suple o perdiste el semestre\n");
const n1String = prompt("Ingrese la primera nota: ");
const n1 = Number(n1String);
if(n1>0 && n1<=5){
console.log("Alerta de Supletorios"); 
}
else if(n1>5 && n1<=8){
console.log("Sigue así y puede que pases sin suples");
}
else if(n1>8 && n1<=10){
console.log("!Excelente¡, aunque no debes descuidarte mucho");    
}
const n2String = prompt("Ingrese la segunda nota: ");
const n2 = Number(n2String);
let res;
res = n1 + n2;
if(res>=1 && res<=8.9){
console.log("Ya estas quedado o si te ayudan llegas a supletorios");
}
else if(res>9 && res<=13.4){
console.log("Ya te quedaste a suple, asi que debes ponerte a estudiar");    
}
else if(res>=13.5 && res<=13.9){
console.log("Aún no te salvas del supletiorio, pero si te ayudan con un puntico ya pasaste");    
}
else if(res>=14 && res<=20){
console.log("¡Perfecto!, Disfruta tus vacaciones");
}
