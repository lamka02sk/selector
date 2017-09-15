import Settings from '../Modules/settings';
import Instance from '../Modules/instance';

export default {

    close() {

        document.addEventListener('click', event => {

            let instances = document.querySelectorAll('.selector-element');

            instances.forEach(instance => {
                if(event.target !== instance && !instance.contains(event.target))
                    instance.querySelector('.selector-options').classList.remove('visible');
            });

        });

    },

    showOptions(options, parent) {

        const data = Settings.data;
        const filter = Instance.isFilterType();

        parent.querySelector('.selector-selected').addEventListener('click', () => {

            options.classList.toggle('visible');

            if(filter) {

                const input = parent.querySelector('input');

                input.focus();
                input.value = '';
                input.oninput();

            }

            options.classList.contains('visible')
                ? data.closed
                    ? data.closed()
                    : data.onClose
                        ? data.onClose()
                        : (function() {})()
                : data.opened
                    ? data.opened()
                    : data.onOpen
                        ? data.onOpen()
                        : (function() {})();

        });

    },

    clearFilter(button, input) {
        
        button.addEventListener('click', () => {
            input.value = '';
            input.oninput();
        });

    },

    filterOptions(filter, parent) {

        let inputElement = filter.querySelector('input');
        let options = parent.querySelector('.selector-options');
        this.clearFilter(filter.querySelector('span'), inputElement);

        this.createIndex(options);

        inputElement.oninput = () => {

            const input = inputElement.value.trim().toLowerCase();
            let optionsList = options.querySelectorAll('.selector-option');

            JSON.parse(options.dataset.index).forEach((option, index) => {

                if(option[0].indexOf(input) !== -1 || option[1].indexOf(input) !== -1)
                    optionsList[index].classList.add('show');
                else
                    optionsList[index].classList.remove('show');

            });

        };

        inputElement.onkeyup = event => {

            if(event.keyCode && event.keyCode === 13) {

                let options = parent.querySelectorAll('.selector-option.show');

                if(options.length !== 1)
                    return false;

                options[0].click();

            }

        };

    },

    createIndex(options) {

        let index = Array.from(options.querySelectorAll('.selector-option')).map(option => {
            return [option.children[0].innerText.toLowerCase(), option.dataset.item.toLowerCase()];
        });

        options.dataset.index = JSON.stringify(index);

    },

    select(parent) {

        let current = parent.querySelector('.selector-selected');
        const settings = Settings.data;
        let origin = document.querySelector('select[name="' + parent.dataset.reference + '"]');

        parent.querySelector('.selector-options').addEventListener('click', event => {

            let target = event.target;
            const selector = '.selector-option';

            if(target.matches(selector) || target.parentNode.matches(selector)) {

                if(!target.matches(selector))
                    target = target.parentNode;

                if(target.dataset.disabled || target.dataset.selected)
                    return false;

                let selected = parent.querySelector('[data-selected]');

                settings.beforeSelect
                    ? settings.beforeSelect(parent, selected.dataset.item)
                    : function() {};

                delete selected.dataset.selected;
                target.dataset.selected = '';
                current.children[0].innerText = target.children[0].innerText;
                current.click();

                origin.querySelector('[selected]').removeAttribute('selected');
                origin.querySelector('[value="' + target.dataset.item + '"]').setAttribute('selected', 'true');

                settings.selected
                    ? settings.selected(parent, target.dataset.item)
                    : settings.onSelect
                        ? settings.onSelect(parent, target)
                        : function() {};

            }

        });

    }

}