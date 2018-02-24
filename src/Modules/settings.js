export default class {

    set(property, value) {

        this.data[property] = value;

    }

    constructor(settings) {

        this.data = {

            // v2.0
            selector: null,             // DONE
            callback: null,             // DONE
            onOpen: null,               // DONE
            onClose: null,              // DONE
            onSelect: null,             // DONE
            destroy: null,              // DONE

            // v3.0
            element: null,              // Alongside "selector"     DONE
            created: null,              // Alongside "callback"     DONE
            opened: null,               // Alongside "onOpen"       DONE
            closed: null,               // Alongside "onClose"      DONE
            selected: null,             // Alongside "onSelect"     DONE

            beforeCreate: null,         // DONE
            beforeSelect: null,         // DONE
            //beforeChange: undefined,
            //changed: undefined,
            beforeDestroy: null,        // DONE
            destroyed: null,            // DONE

            label: null,                // DONE
            type: null,                 // DONE
            //identifier: null,
            //cover: false,
            //disabled: false,
            //relative: false,
            //watch: true

        };

        Object.keys(settings).forEach(key => {
            this.data[key] = settings[key];
        });

    }

};