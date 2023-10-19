(()=>{
 
    function funcionRest(nombre:string,...paramsRest:string[]){
        return `${nombre} ${paramsRest.join(' ')}`;
    }

    console.log(funcionRest('edder','ivan','lucas','joel'));

})()