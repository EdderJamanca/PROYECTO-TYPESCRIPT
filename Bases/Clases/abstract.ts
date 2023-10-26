(()=>{


   abstract class Mutante {
        constructor(
            public name:String,
            public realName:string
        ){

        }


    }

    class Xemen extends Mutante{

    }

    class Villano extends Mutante{
        public conquistarMutante(){
            return 'Conquistar el mundo';
        }
    }

    // LAS CLASES ABSTRACTAS NOS SIRVE COMO CASCARON PARA CREAR OTRAS CLASES
    const wolverine=new Xemen('Wolverine','Logan');

    const vilanos=new Villano('Magneto','Magnus');


    console.log('wolverine',wolverine);

    const printName=(character:Mutante)=>{
        console.log(character.realName);
    }

    // printName(magneto);
})()