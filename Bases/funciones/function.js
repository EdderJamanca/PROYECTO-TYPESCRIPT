"use strict";
(() => {
    const hero = 'Batman';
    function retornadoNombre() {
        return hero;
    }
    const funcionBasica = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof retornadoNombre());
    console.log(typeof funcionBasica());
})();
