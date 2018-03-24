import Settings from '../src/Modules/settings';
import Core from '../src/Modules/core';

module.exports = class {

    constructor(settings) {

        this.Settings = new Settings(settings);
        Core.constructor(this.Settings);

    }

    destroy() {
        Core.destroy();
    }

};