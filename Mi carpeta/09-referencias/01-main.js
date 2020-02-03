var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Referencias
function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log("Uno", uno);
    console.log("Dos", dos);
    console.log("Tres", tres);
    uno = 5;
    console.log("Uno", uno);
    console.log("Dos", dos);
    console.log("Tres", tres);
    var arreglito = [1, 2, 3];
    var miOtroArreglito = [];
    var a = arreglito[0]; //valor
    var b = arreglito[1]; //valor
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglito = __spreadArrays(arreglito);
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
    console.log('arreglito', arreglito);
    console.log('miOtroArreglito', miOtroArreglito);
    console.log('a', a);
    console.log('b', b);
    var adrian = {
        id: 1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    var soloElNombre = __assign({}, adrian);
    var copUno = __assign({}, adrian);
    var copDos = __assign({}, soloElNombre);
    console.log('adrian', adrian);
    console.log('SoloElNombre', soloElNombre);
    delete adrian.nombre; //Eliminar el nombre del Objeto
    console.log('adrian', adrian);
    console.log('SoloElNombre', soloElNombre);
    soloElNombre['edad'] = 22;
    // soloElNombre.edad = 22;
    console.log('adrian', adrian);
    console.log('SoloElNombre', soloElNombre);
    console.log('copia1', copUno);
    console.log('copia2', copDos);
}
main();
