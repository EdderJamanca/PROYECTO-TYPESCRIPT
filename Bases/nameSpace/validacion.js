"use strict";
var validacion;
(function (validacion) {
    const validationText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validacionFecha = (miFecha) => {
        return (isNaN(miFecha.valueOf())) ? false : true;
    };
})(validacion || (validacion = {}));
//# sourceMappingURL=validacion.js.map