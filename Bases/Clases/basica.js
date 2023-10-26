"use strict";
(() => {
    class Avenger {
        getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.name = name;
            this.team = team;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.avgAge = 20;
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
    console.log('bio', antman.bio());
    console.log('getAvgAge', antman.getAvgAge());
})();
//# sourceMappingURL=basica.js.map