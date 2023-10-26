(()=>{
    class Avenger {
        // private name:string;
        // public team:string;
        // public realName:string;
        static avgAge:number=20;

        // constructor(name:string,team:string,realName?:string){
        //     this.name=name;
        //     this.team=team;
        //     // this.realName=realName;
        // }

        public getAvgAge(){
            return this.name;
        }

       constructor(
            private name:string,
            private team:string,
            public realName?:string){
            this.name=name;
            this.team=team;
            // this.realName=realName;
        }

        bio(){
            return `${this.name} ${this.team}`;
        }
    }

    const antman:Avenger=new Avenger('Antman','Capitan');

    console.log(antman);
    console.log('bio',antman.bio());
    // obteniendo los valores de la privadfos
    console.log('getAvgAge',antman.getAvgAge())


})()