//Programa que cuenta chistes cortos y algunos graciosos.
console.log("Bienvenidos");
console.log("A continuación unos chistes para no parar de reir");;
let chisteString = prompt("Ingrese algun número para que aparezca algun chiste: ");
let chiste = Number(chisteString);
switch(chiste){
    case (1):
        console.log("¡Estás obsesionado con la comida! \n No sé a que te refieres croquetamente");
        break;
    case (2):
        console.log("¿Sabes cómo se qeuda un mago después de comer? \n Magordito");
        break;
    case (3):
        console.log("¡Me acaba de picar una serpiente! \n ¿Cobra? \n ¡No , idiota, lo ha echo gratis!");
        break;
    case (4):
        console.log("¿Qué le dice un espagueti a otro? \n ¡El cuerpo me pide salsa!");
        break;
    default:
        console.log("Ya no poseemos mas chistes en este momento");
        break;
}
