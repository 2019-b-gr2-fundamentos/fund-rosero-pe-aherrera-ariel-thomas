//Referencias
function main(){
    let uno = 1;
    let dos = uno;
    let tres = dos;
    console.log("Uno",uno);
    console.log("Dos",dos);
    console.log("Tres",tres);

    uno = 5;
    console.log("Uno",uno);
    console.log("Dos",dos);
    console.log("Tres",tres);

    let arreglito = [1,2,3];
    let miOtroArreglito = [];
    let a = arreglito[0];  //valor
    let b = arreglito[1];  //valor

    console.log('arreglito',arreglito);
    console.log('a',a);
    console.log('b',b);

    miOtroArreglito = [
        ...arreglito,
        // ...arreglito //Se puede copiar varios arreglo, si se desea)
        // ...arreglito
    ];

    //miOtroArreglito = arreglito; //Referencia a la Direccion de memoria 
    //Asignar a mi otro arreglo una nueva dirección de memoria.
    // 1-> For llenamos un nuevo arreglo
    // 2-> Filter -> Siempre True -> Nuevo arreglo
    // 3-> Map -> Nuevo Arreglo
    
    //Inmutabilidad
    // JS-> Arreglos o Objetos -> Clon¡
    //Clon del Arreglo-> Clon Trabajar (Diferentes soluciones en los LP)


    miOtroArreglito.push(2);
    arreglito[0] = 9;
    arreglito[1] = 10;

    console.log('arreglito',arreglito);
    console.log('miOtroArreglito', miOtroArreglito);
    console.log('a',a);
    console.log('b',b);

    const adrian = {
        id:1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    const soloElNombre = {
        ...adrian
    };

    const copUno = {
        ...adrian
    };

    const copDos = {
        ...soloElNombre
    };

    console.log('adrian',adrian);
    console.log('SoloElNombre',soloElNombre); 
    delete adrian.nombre; //Eliminar el nombre del Objeto
    console.log('adrian',adrian);
    console.log('SoloElNombre',soloElNombre); 

    soloElNombre['edad'] = 22;
    // soloElNombre.edad = 22;
    console.log('adrian',adrian);
    console.log('SoloElNombre',soloElNombre); 

    console.log('copia1',copUno);
    console.log('copia2',copDos);

}

main();
