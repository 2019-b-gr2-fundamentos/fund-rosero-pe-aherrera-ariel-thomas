function main(){
    const arregloEstudiantes: any = [
        {id:1, nombre: "Adrian", nota: 7}, 
        {id:2, nombre: "Vicente", nota: 9},
        {id:3, nombre: "Wendy", nota: 4},
        {id:4, nombre: "Carolina", nota: 10},
        {id:5, nombre: "Carlos", nota: 6.5}
    ] 
    //ORADOR FOREACH
    //Enviamos -> Nada
    //Recibimos -> Nada
    const respuestaForEach = arregloEstudiantes
        .forEach(
            function(valorActual, indice, arreglo){
                console.log(valorActual.nota);
            }
        )
    console.log(respuestaForEach); //undefined

    //MAP -> Transformar o mutar el arreglo. 
    //Recibir -> Nuevo arreglo con valores modificados. Es muy utíl en los arreglso
    const respuestaMap = arregloEstudiantes
    .map(
        function(valorActual,i,arreglo){
            const nuevoObjecto = {
                id:valorActual.id,
                nombre: valorActual.nombre,
                nota20: valorActual.nota * 2
            };
            return nuevoObjecto;
        }
    );
    console.log('Respuesta MAP',respuestaMap)
    console.log('arregloEstudiantes',arregloEstudiantes)

    //Filter -> Filtra el arreglo
    //Enviamos -> Condicion
    //Recibir -> Nuevo arreglo con valores filtrados

    const respuestaFilter = arregloEstudiantes
        .filter(
            function(valorActual, indice, arreglo){
                const condicion7 = valorActual.nota > 7;
                const condicion5 = valorActual.nota < 5;
                return condicion7 || condicion5; 
            }
        )
    console.log('RespuestaFilter',respuestaFilter);
    console.log('arregloEstudiantes',arregloEstudiantes);

    //AND -> every(Todos cumplan)  / OR -> some(Uno cumpla)

    //SOME -> Devulve verdadero o falso, dependiendo de la condición
    //  Si alguno cumple devulve true 
    //  Si ninguno cumple devuelve false

    //Enviamos -> Condicion
    //Recibimos -> Booleano

    const respuetaSome = arregloEstudiantes
    .some(
        function(valorActual,indice,arreglo){
            const condicion = valorActual.nota < 7;
            //Condicion Truty o true
            return condicion; 
        }
    );
    console.log('RespuestaSome',respuetaSome);
    console.log('arregloEstudiantes',arregloEstudiantes);
    
    //Every -> Devulve verdadero o falso, dependiendo de la condición
    //  Si todos cumplen la condicion true 
    //  Si alguno no cumple la condicon false

    //Enviamos -> Condicion
    //Recibimos -> Booleano
    
    const respuestaEvery = arregloEstudiantes
    .every(
        function(valorActual){
            const condicion = valorActual.nota >= 4;
            return condicion;
        }
    );
    console.log('RespuestaEvery',respuestaEvery);
    console.log('arregloEstudiantes',arregloEstudiantes);

    //Reduce -> Devulve un valor con el calculo aplicado
    //Enviamos -> Calculo
    //Recibimos -> Valor

    const respuestaReduce = arregloEstudiantes
    .reduce(
        function(acumulador,valorActual) { //Recibe dos parametros: Funcion
            const calculo = acumulador + valorActual.nota;
            return calculo 
        },
        0 //valor inicial del acumulador
    );
    console.log('RespuestaReduce',respuestaReduce);
    console.log('Promedio', respuestaReduce / arregloEstudiantes.length);
    console.log('arregloEstudiantes',arregloEstudiantes);
}
main();
