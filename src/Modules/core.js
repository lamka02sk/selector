import Settings from '../Modules/settings';
import Instance from '../Modules/instance';

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

        Settings.get('element').forEach(element => {

            if(!this.checkElement(element))
                return false;

            Instance.constructor(element);

        });

    },

    checkElement(element) {

        if(!element.nodeType)
            return false;

        return (element.tagName === 'SELECT');

    }

};