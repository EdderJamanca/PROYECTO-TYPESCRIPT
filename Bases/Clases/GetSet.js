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
        get FullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverime', 'Logan', true);
    console.log('wolverine', wolverine);
    console.log(wolverine.getFullnameExmen());
    console.log('obteniendo get', wolverine.FullName);
    wolverine.fullName = 'Lucas';
    console.log('obteniendo set l', wolverine.FullName);
})();
//# sourceMappingURL=GetSet.js.map