(()=>{

    const funcionPerson=(nombre:string,apellido:string):string=>{
        return `Hola ${nombre} ${apellido}`
    }

    const nombreCompleto=funcionPerson('edder','jamanca');

    console.log(nombreCompleto);

    // variable ? ->indicamos que la variable es opcional


    const funcionPersonv2=(nombre:string,apellido?:string):string=>{
        return `Hola ${nombre} ${apellido || 'no tiene apellido'}`
    }

    const nombreCompletov2=funcionPersonv2('ivan');

    console.log(nombreCompletov2);

    // FUNCIONES CON PARAMETROS POR DEFECTO
    const funcionPersonv3=(nombre:string='Computer',apellido:string='oficio'):string=>{
        return `Hola ${nombre} ${apellido || 'no tiene apellido'}`
    }

    const nombreCompletov3=funcionPersonv3();

    console.log(nombreCompletov2);
})()