(()=>{

    interface Xmen {
        name:string;
        realName:string;
        nutantPower(id:number):string;
    }

    interface Human {
        age:number;
    }

    class Mutant implements Xmen, Human {
        
        public age:number=1;
        public name:string='';
        public realName:string='';

        nutantPower(id:number){
            return 'aaa';
        }
    }

})()