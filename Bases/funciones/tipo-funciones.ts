(()=>{

    const addNumber=(a:number,b:number)=>a + b;

    const greet=(nombre:string)=>`Hola ${nombre}`;

    const guardaElMundo=()=>'El mundo esta saludando';


    let myFuncion:(a:number,b:number)=> number;
    let myFuncionv2:(a:string,b:string)=> string;

    let myFuncionv3:()=> string;


    // myFuncion=10;

    // aqui asignamos la funcion a la variable myFuncion.si ponemos con () se ejecuta la funcion
    myFuncion=addNumber;

    myFuncionv2=greet;

    myFuncionv3=guardaElMundo;

})()