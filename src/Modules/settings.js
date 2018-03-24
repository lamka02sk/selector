export default class {

    set(property, value) {
        this.data[property] = value;
    }

    constructor(settings) {

        this.data = {

            element: null,
            created: null,
            opened: null,
            closed: null,
            selected: null,

            beforeDestroy: null,
            destroyed: null,

            label: null,
            identifier: null,
            cover: false,
            relative: false,

        };

        Object.keys(settings).forEach(key => {
            this.data[key] = settings[key];
        });

    }

};