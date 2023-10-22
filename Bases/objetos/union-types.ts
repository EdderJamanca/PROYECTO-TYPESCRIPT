(()=>{

    type Hero={
        name:string,
        age?:number,
        powers:number[],
        getName?:()=>string
    }

    let funcionvariable:(string|number|Hero)='Fernando';

    console.log(typeof funcionvariable);

    funcionvariable=20;
    console.log(typeof funcionvariable);

    funcionvariable={
        name:'Bruce',
        age:43,
        powers:[1]
    }
    console.log(typeof funcionvariable);


})()
