(()=>{
    let avenger:any=123;
    let exits;
    let power;

    avenger="Dr Strange";

    console.log((avenger as string).charAt(0));

    avenger=150.2256;
    console.log(<number>avenger.toFixed(2));

    console.log(exits);
    console.log(power);
})()