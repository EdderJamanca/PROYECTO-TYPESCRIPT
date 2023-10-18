"use strict";
(() => {
    const error = (message) => {
        if (!message) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilop');
    error('');
    console.log('Hola mundo');
})();
