"use strict";
(() => {
    const funcionPerson = (nombre, apellido) => {
        return `Hola ${nombre} ${apellido}`;
    };
    const nombreCompleto = funcionPerson('edder', 'jamanca');
    console.log(nombreCompleto);
    const funcionPersonv2 = (nombre, apellido) => {
        return `Hola ${nombre} ${apellido || 'no tiene apellido'}`;
    };
    const nombreCompletov2 = funcionPersonv2('ivan');
    console.log(nombreCompletov2);
    const funcionPersonv3 = (nombre = 'Computer', apellido = 'oficio') => {
        return `Hola ${nombre} ${apellido || 'no tiene apellido'}`;
    };
    const nombreCompletov3 = funcionPersonv3();
    console.log(nombreCompletov2);
})();
//# sourceMappingURL=args-required.js.map