"use strict";
(() => {
    let AudioLavel;
    (function (AudioLavel) {
        AudioLavel[AudioLavel["min"] = 1] = "min";
        AudioLavel[AudioLavel["medium"] = 2] = "medium";
        AudioLavel[AudioLavel["max"] = 10] = "max";
    })(AudioLavel || (AudioLavel = {}));
    let currentAudio = AudioLavel.max;
    console.log(currentAudio);
    console.log(AudioLavel);
})();
//# sourceMappingURL=enums.js.map