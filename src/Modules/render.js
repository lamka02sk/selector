import Instance from '../Modules/instance';
import Settings from '../Modules/settings';

export default class Render {

    constructor(element) {

        this._element = element;
        this.hideOrigin();

        this._render = undefined;

    }

    hideOrigin() {

        this._element.style.display = 'none';

    }

    renderParent() {

        let template = Instance.parentTemplate.cloneNode(true);

        template.id = this._element.id;
        template.dataset.reference = this._element.name;
        template.dataset.type = Settings.get('type') || this._element.dataset.type || 'default';
        this._element.disabled ? template.dataset.disabled = true : '';

        this._render = template;

    }

    renderContent() {

        let result;
        let options = this._render.querySelector('.selector-options');

        if(Instance.isFilterType())
            options.appendChild(Render.renderSearch());

        Array.from(this._element.children).forEach(child => {

            const tagName = child.tagName;

            if(tagName === 'OPTGROUP')
                result = this.renderGroup(child);
            else if(tagName === 'OPTION')
                result = Render.renderOption(child);
            else
                return true;

            options.appendChild(result);

        });

    }

    static renderSearch() {

        if(Instance.filterTemplate === undefined)
            Instance.createFilterElement();

        return Instance.filterTemplate.cloneNode(true);

    }

    renderGroup(element) {

        let template = Instance.groupTemplate.cloneNode(true);
        template.dataset.group = template.children[0].innerText = element.label;
        element.disabled ? template.dataset.disabled = true : '';

        Array.from(element.children).forEach(option => {
            template.appendChild(Render.renderOption(option));
        });

        return template;

    }

    static renderOption(element) {

        let template = Instance.optionTemplate.cloneNode(true);
        template.dataset.item = element.value;
        template.children[0].innerText = element.innerText;
        element.disabled ? template.dataset.disabled = true : '';

        return template;

    }

    renderSelected() {

        let selected = this._render.querySelector('.selector-selected');

        if(!!Settings.get('label'))
            selected.children[0].innerText = Settings.get('label');

        else {

            let selectedOption = this._element.querySelector('[selected]');

            if(selectedOption) {

                selected.dataset.item = selectedOption.value;
                selected.children[0].innerText = selectedOption.innerText;

            } else {

                selected.dataset.item = undefined;
                selected.children[0].innerText = '---';

            }

        }

    }

    show() {

        this._element.parentNode.insertBefore(this._render, this._element.nextSibling);

    }

};