(()=>{
    class Apoocalipsis {

        static instance:Apoocalipsis;

        constructor(
            public name:string,
        
            ){}
    
        static callApocalipsis():Apoocalipsis {

            if(!Apoocalipsis.instance){
                Apoocalipsis.instance= new Apoocalipsis('Soy Apocalipisis')
            }
           return Apoocalipsis.instance;
            }

        changeName(newName:string):void{
             
        }
    }

    const Apoocalipcisv1= Apoocalipsis.callApocalipsis();


})()