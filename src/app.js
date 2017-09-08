import Settings from '../src/Modules/settings';
import Core from '../src/Modules/core';

window.Selector = (function() {

    /**
     * Private
     */
    function init(settings) {

        Settings.save(settings);
        Core.constructor();

    }

    /**
     * Public
     */
    return function(settings) {

        init(settings);

    };

})();