import Render from '../Modules/render';

export default class {

    constructor(element, settings) {

        this.parentTemplate = null;
        this.selectedTemplate = null;
        this.groupTemplate = null;
        this.optionsTemplate = null;
        this.optionTemplate = null;
        this.filterTemplate = null;

        this.Settings = settings;
        this.element = element;
        this.createElements();

        let renderer = new Render(element, settings, this);
        renderer.renderParent();
        renderer.renderContent();
        renderer.renderSelected();
        this.render = renderer.show();

        return this;

    }

    createElement(tagName, attributes) {

        let element = document.createElement(tagName);

        Object.keys(attributes).forEach(attribute => {
            element.setAttribute(attribute, attributes[attribute]);
        });

        return element;

    }

    createElements() {

        this.createParentElement();
        this.createSelectedElement();
        this.createGroupElement();
        this.createOptionsElement();
        this.createOptionElement();

        this.parentTemplate.appendChild(this.selectedTemplate);
        this.parentTemplate.appendChild(this.optionsTemplate);

    }

    createParentElement() {

        this.parentTemplate = this.createElement('div', {
            'class': 'selector-element',
            'data-reference': '',
            'id': ''
        });

    }

    createSelectedElement() {

        this.selectedTemplate = this.createElement('div', {
            'class': 'selector-selected'
        });

        this.selectedTemplate.appendChild(
            this.createElement('p', {
                'class': 'selected-text'
            })
        );

    }

    createGroupElement() {

        this.groupTemplate = this.createElement('div', {
            'class': 'selector-group',
            'data-group': ''
        });

        this.groupTemplate.appendChild(
            this.createElement('span', {
                'class': 'group-text'
            })
        );

    }

    createOptionsElement() {

        this.optionsTemplate = this.createElement('div', {
            'class': 'selector-options'
        });

    }

    createOptionElement() {

        this.optionTemplate = this.createElement('div', {
            'class': 'selector-option show',
            'data-item': ''
        });

        this.optionTemplate.appendChild(
            this.createElement('span', {
                'class': 'option-text'
            })
        );

    }

    createFilterElement() {

        this.filterTemplate = this.createElement('div', {
            'class': 'selector-filter'
        });

        this.filterTemplate.appendChild(
            this.createElement('input', {
                'class': 'selector-filter-input',
                'data-placeholder': 'SELECTOR_FILTER_PLACEHOLDER',
                'placeholder': 'Filter options'
            })
        );

        this.filterTemplate.appendChild(
            this.createElement('span', {
                'class': 'selector-filter-clear'
            })
        );

    }

};