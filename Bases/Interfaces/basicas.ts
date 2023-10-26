(()=>{

    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?:()=>string
    }

    let flash:Hero={
        name:'Barry Allen',
        age:24,
        powers:[1,2]
    }

    let superman: Hero={
        name:'Clark kent',
        age:25,
        powers:[1,2,3],
        getName(){
            return this.name;
        }
    }

})()