"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (nombre) => `Hola ${nombre}`;
    const guardaElMundo = () => 'El mundo esta saludando';
    let myFuncion;
    let myFuncionv2;
    let myFuncionv3;
    // myFuncion=10;
    // aqui asignamos la funcion a la variable myFuncion.si ponemos con () se ejecuta la funcion
    myFuncion = addNumber;
    myFuncionv2 = greet;
    myFuncionv3 = guardaElMundo;
})();
