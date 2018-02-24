import Instance from '../Modules/instance';
import Events from '../Modules/events';

export default {

    constructor(settings) {

        this.Settings = settings;
        this.prepareElements();
        this.render();

    },

    prepareElements() {

        let element = this.Settings.data.element;

        if(typeof element === 'string') {

            element = document.querySelectorAll(element);

            if(element.length === 0)
                throw new DOMException;
            else
                this.Settings.set('element', element);

        }

    },

    render() {

        this.Settings.data.element.forEach(element => {

            if(!this.checkElement(element))
                return false;

            Instance.constructor(element, this.Settings);

        });

        Events.closeSelector();

    },

    checkElement(element) {

        if(!element.nodeType)
            return false;

        return (element.tagName === 'SELECT');

    },

    destroy() {

        let settings = this.Settings.data;

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