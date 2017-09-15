import Settings from '../Modules/settings';
import Instance from '../Modules/instance';
import Events from '../Modules/events';

export default {

    constructor() {

        this.prepareElements();
        this.render();

    },

    prepareElements() {

        let element = Settings.get('element');
        element = document.querySelectorAll(element);

        if(element.length === 0)
            throw new DOMException;
        else
            Settings.set('element', element);

    },

    render() {

        Settings.data.element.forEach(element => {

            if(!this.checkElement(element))
                return false;

            Instance.constructor(element);

        });

        Events.close();

    },

    checkElement(element) {

        if(!element.nodeType)
            return false;

        return (element.tagName === 'SELECT');

    },

    destroy() {

        let settings = Settings.data;

        settings.beforeDestroy
            ? settings.beforeDestroy()
            : function() {};

        settings.element.forEach(element => {

            let parent = element.parentNode;
            parent.removeChild(parent.querySelector('[data-reference="' + element.name + '"]'));

            element.style.display = '';

        });

        settings.destroyed
            ? settings.destroyed()
            : function() {};

    }

};