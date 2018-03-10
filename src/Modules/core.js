import Instance from '../Modules/instance';
import Events from '../Modules/events';

export default {

    instances: [],

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

            this.instances.push(new Instance(element, this.Settings));

        });

        if(this.Settings.data.disabled)
            this.disable();

        Events.closeSelector();

    },

    checkElement(element) {

        if(!element.nodeType)
            return false;

        return (element.tagName === 'SELECT');

    },

    enable(element) {

        if(!element)
            this.Settings.data.disabled = false;

        !element
            ? this.instances.forEach(instance => instance.enable())
            : this.instances.forEach(instance => {
                if(instance.element.outerHTML === element.outerHTML)
                    instance.enable();
            });

    },

    disable(element) {

        if(!element)
            this.Settings.data.disabled = true;

        !element
            ? this.instances.forEach(instance => instance.disable())
            : this.instances.forEach(instance => {
                if(instance.element.outerHTML === element.outerHTML)
                    instance.disable();
            });

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