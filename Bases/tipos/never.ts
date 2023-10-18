(()=>{

    const error= (message:string):(never|number) =>{
        if(!message){
            throw new Error(message);
        }
        return 1;
    }

    error('Auxilop');
    error('');

    console.log('Hola mundo');
})()