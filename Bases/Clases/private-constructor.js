"use strict";
(() => {
    class Apoocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apoocalipsis.instance) {
                Apoocalipsis.instance = new Apoocalipsis('Soy Apocalipisis');
            }
            return Apoocalipsis.instance;
        }
        changeName(newName) {
        }
    }
    const Apoocalipcisv1 = Apoocalipsis.callApocalipsis();
})();
//# sourceMappingURL=private-constructor.js.map