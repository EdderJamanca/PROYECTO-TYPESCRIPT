(()=>{
    class Avenger {

        constructor(
            public name:string,
            public realName:string
        ){
            console.log('Constructor Avenger llamado');
        }

        protected getFullname(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
     
        constructor(
            name:string,
            realName:string,
            public isMauntet:boolean
        ){
            super(name,realName);
        }

        public getFullnameExmen(){
            return super.getFullname();
        }

        get FullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name:string){
            this.name=name;
        }

        // getFullnameDesdeXmen(){
            // console.log(su)
        // }
    }

    const wolverine=new Xmen('Wolverime','Logan',true);

    console.log('wolverine',wolverine)

    console.log(wolverine.getFullnameExmen())

    console.log('obteniendo get',wolverine.FullName);
    // usando el set
    wolverine.fullName='Lucas';

    console.log('obteniendo set l',wolverine.FullName);

})()