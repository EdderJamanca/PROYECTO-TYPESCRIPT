"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viaje en el tiempo']
    };
    flash = {
        name: 'Otro nombre',
        age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };
})();
