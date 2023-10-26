(()=>{


    interface Client {
        name:string;
        age?:number;
        address?:Address;
        getFullAddress(id:string):string
    }

    interface Address {
            id:number;
            zip:string,
            city:string
    }

    const client:Client={
        name:"edder",
        age:29,
        address:{
            id:1,
            zip:'KXY SUB',
            city:'Ottawa'
        },
        getFullAddress(id:string){
            return 'ghcghgh'+id;
        }
    }

    const client2:Client={
        name:"edder",
        age:29,
        address:{
            id:1,
            zip:'KXY SUB 1',
            city:'Ottawa 2'
        },
        getFullAddress(id:string){
            return 'ghcghgh'+id;
        }
    }
})()