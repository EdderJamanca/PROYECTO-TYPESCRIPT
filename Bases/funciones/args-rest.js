"use strict";
(() => {
    function funcionRest(nombre, ...paramsRest) {
        return `${nombre} ${paramsRest.join(' ')}`;
    }
    console.log(funcionRest('edder', 'ivan', 'lucas', 'joel'));
})();
