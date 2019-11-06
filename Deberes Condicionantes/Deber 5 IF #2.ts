console.log("\n Saber si tienes que salir a la calle con saco o sin saco en Quito\n");
const TempString = prompt("Ingrese la Temperatura del día: ");
const Temp = Number(TempString);
if(Temp>8.9 && Temp<=9.5){
console.log("Si vas a salir, es mejor que te abrigues muy bien"); 
}
else if(Temp>9.5 && Temp<=11){
console.log("Debes salir a pasear con un saco abrigado por si acaso");
}
else if(Temp>11 && Temp<=13){
console.log("Con una chompa o un saco no tan abrigado esta bien");    
}
else if(Temp>13 && Temp<=16){
    console.log("Esta en buena tempreratura así que sal nomas en camista");    
}
else if(Temp>16 && Temp<=19){
    console.log("Temperaturas muy calurosas, es mejor que salgas hasta con sombrilla para que no te quemes");    
}
else { 
    console.log("Las Temperaturas en Quito no alcanzan este rango");            
}
