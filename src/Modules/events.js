export default class {

    constructor(settings, instance) {
        this.Settings = settings;
        this.Instance = instance;
    }

    static closeSelector() {

        document.addEventListener('click', event => {

            const instances = document.querySelectorAll('.selector-element');

            instances.forEach(instance => {
                if(event.target !== instance && !instance.contains(event.target))
                    instance.querySelectorAll('.selector-options, .selector-selected')
                        .forEach(element => element.classList.remove('visible'));
            });

        });

    }

    showOptions(options, parent) {

        const data = this.Settings.data;

        parent.querySelector('.selector-selected').addEventListener('click', event => {

            if(parent.matches('[data-disabled]') || this.Instance.render.hasAttribute('data-disabled'))
                return false;

            options.classList.toggle('visible');
            event.currentTarget.classList.toggle('visible');

            options.classList.contains('visible')
                ? data.closed
                    ? data.closed()
                    : (function() {})()
                : data.opened
                    ? data.opened()
                    : (function() {})();

        });

    }

    select(parent) {

        let current = parent.querySelector('.selector-selected');
        const settings = this.Settings.data;
        let origin = document.querySelector('select[name="' + parent.dataset.reference + '"]');

        parent.querySelector('.selector-options').addEventListener('click', event => {

            let target = event.target;
            const selector = '.selector-option';

            if(target.matches(selector) || target.parentNode.matches(selector)) {

                if(!target.matches(selector))
                    target = target.parentNode;

                if(target.dataset.disabled || target.dataset.selected || target.parentNode.matches('[data-disabled]'))
                    return false;

                let selected = parent.querySelector('[data-selected]');
                let option = target.dataset.item;

                delete selected.dataset.selected;
                target.dataset.selected = '';
                current.dataset.item = option;
                current.children[0].innerText = target.children[0].innerText;
                current.click();

                origin.querySelector('[selected]').removeAttribute('selected');
                origin.querySelector('[value="' + target.dataset.item + '"]').setAttribute('selected', 'true');

                settings.selected
                    ? settings.selected(parent, target.dataset.item)
                    : function() {};

            }

        });

    }

}