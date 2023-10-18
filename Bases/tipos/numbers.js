"use strict";
(() => {
    let avengers = 10;
    console.log('hola mundo cruel', avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos sabamos');
    }
    avengers = Number('123a');
    console.log(avengers);
})();
