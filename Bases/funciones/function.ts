(()=>{
    const hero:string='Batman';

    function retornadoNombre():string{
        return hero;
    }

    const funcionBasica=():string=>{
        return 'Batiseñal activada!'
    }
    console.log(typeof retornadoNombre());
    console.log(typeof funcionBasica());


})()