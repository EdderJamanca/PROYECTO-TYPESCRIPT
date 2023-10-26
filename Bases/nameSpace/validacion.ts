namespace validacion {
    const validationText=(text:string):boolean=>{
   return (text.length >3) ? true:false;
    }

    const validacionFecha=(miFecha:Date):boolean =>{
        return (isNaN(miFecha.valueOf())) ? false : true;
    }
}