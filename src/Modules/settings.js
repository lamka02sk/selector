export default class {

    set(property, value) {
        this.data[property] = value
    }

    constructor(settings) {

        this.data = {

            // v2.0
            selector: null,
            callback: null,
            onOpen: null,
            onClose: null,
            onSelect: null,
            destroy: null,

            // v3.0
            element: null,              // Alongside "selector"
            created: null,              // Alongside "callback"
            opened: null,               // Alongside "onOpen"
            closed: null,               // Alongside "onClose"
            selected: null,             // Alongside "onSelect"

            beforeCreate: null,
            beforeDestroy: null,
            destroyed: null,
            beforeSelect: null,

            label: null,
            type: null,
            disabled: false,
            identifier: null,
            cover: false,
            relative: false,

            // v4.0 - lol :D
            //watch: true,
            //beforeUpdate: null,
            //updated: null,            // Prepared for v4

        }

        Object.keys(settings).forEach(key => {
            this.data[key] = settings[key]
        })

    }

}