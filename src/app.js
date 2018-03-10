import Settings from '../src/Modules/settings';
import Core from '../src/Modules/core';

module.exports = class {

    constructor(settings) {

        this.Settings = new Settings(settings);
        Core.constructor(this.Settings);

    }

    enable(element = null) {
        Core.enable(element);
    }

    disable(element = null) {
        Core.disable(element);
    }

    destroy() {
        Core.destroy();
    }

};