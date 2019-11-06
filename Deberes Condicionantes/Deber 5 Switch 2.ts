console.log("Bienvenidos");
console.log("Aquí podra ver la fecha y luger de creación de algunos deportes");
let deporte;
deporte = prompt("Ingrese el deporte (Primera letra en mayuscula): ")
switch(deporte) {
    case "Futbol":
        console.log("Su creación es atribuida a Inglaterra, \n país que reglamentó el juego en 1863 \n a través de la Football Association (FA) \n la primera asociación del fútbol.")
        break;
    case "Basketball": 
        console.log("El básquetbol o baloncesto tuvo su origen \n en un plantel educativo de los EE.UU. \n En 1891, el maestro canadiense James Naismith, instructor de deportes \n de la Universidad de Springfield (Massachusetts), \n fue su creador");
        break;
    case "Baseball":
        console.log("Está claro que el béisbol moderno se desarrolló \n en Estados Unidos, aunque el origen exacto del juego es difícil \n de determinar. La mayoría de los estudios \n creen que el béisbol evolucionó desde una variedad \n de juegos similares. Una leyenda popular cuenta que \n Abner Doubleday, quien llegó a ser oficial del Ejército \n de la Unión durante la Guerra Civil estadounidense \n (1861-1865), inventó el béisbol en Cooperstown \n (Nueva York) en 1839. ");
        break;
    case "Tennis":
        console.log("Las primeras referenfias del tenis tienen lugar en Alemania,\n dado que al inicio se golpeaba la pelota con la mano. \n Se originó en Europa del siglo XVIII y se expandio \n en un principio por los países angloparlantes, especialemnte \n entre sus clases altas. ");
    default:
        console.log("No existe mas registros de historias de Deportes");
        break;
}
