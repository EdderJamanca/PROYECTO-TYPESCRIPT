"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMauntet) {
            super(name, realName);
            this.isMauntet = isMauntet;
        }
        getFullnameExmen() {
            return super.getFullname();
        }
    }
    const wolverine = new Xmen('Wolverime', 'Logan', true);
    console.log('wolverine', wolverine);
    console.log(wolverine.getFullnameExmen());
})();
//# sourceMappingURL=extens.js.map