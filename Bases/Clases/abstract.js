"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xemen extends Mutante {
    }
    class Villano extends Mutante {
        conquistarMutante() {
            return 'Conquistar el mundo';
        }
    }
    const wolverine = new Xemen('Wolverine', 'Logan');
    const vilanos = new Villano('Magneto', 'Magnus');
    console.log('wolverine', wolverine);
    const printName = (character) => {
        console.log(character.realName);
    };
})();
//# sourceMappingURL=abstract.js.map