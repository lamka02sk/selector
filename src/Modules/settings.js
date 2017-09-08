export default {

    data: {

        // v2.0
        selector: null,
        callback: undefined,
        onOpen: undefined,
        onClose: undefined,
        onSelect: undefined,

        // v3.0
        element: null,              // Alongside "selector"     DONE
        created: undefined,         // Alongside "callback"
        opened: undefined,          // Alongside "onOpen"
        closed: undefined,          // Alongside "onClose"
        selected: undefined,        // Alongside "onSelect"

        beforeCreate: undefined,
        beforeSelect: undefined,
        beforeChange: undefined,
        changed: undefined,
        beforeDestroy: undefined,
        destroyed: undefined,

        label: null,                // DONE
        type: null,                 // DONE
        identifier: null,
        cover: false,
        disabled: false,
        relative: false,
        watch: true,
        animations: 'default'

    },

    get(property) {

        return this.data[property];

    },

    set(property, value) {

        if(!this.data.hasOwnProperty(property)) return false;
        this.data[property] = value;

    },

    save(settings) {

        Object.keys(settings).forEach(key => {

            if(!this.data.hasOwnProperty(key)) return false;
            this.data[key] = settings[key];

        });

    }

};