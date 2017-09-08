import Render from '../Modules/render';
import Settings from '../Modules/settings';

export default {

    parentTemplate: undefined,
    selectedTemplate: undefined,
    groupTemplate: undefined,
    optionsTemplate: undefined,
    optionTemplate: undefined,
    filterTemplate: undefined,

    _instances: [],

    constructor(element) {

        this.element = element;
        this.createElements();

        let renderer = new Render(element);
        renderer.renderParent();
        renderer.renderContent();
        renderer.renderSelected();
        renderer.show();

    },

    isFilterType() {

        return (Settings.get('type') === 'filter' || (this.element.getAttribute('data-type') || '').match(/(search)|(find)/));

    },

    createElement(tagName, attributes) {

        let element = document.createElement(tagName);

        Object.keys(attributes).forEach(attribute => {
            element.setAttribute(attribute, attributes[attribute]);
        });

        return element;

    },

    createElements() {

        this.createParentElement();
        this.createSelectedElement();
        this.createGroupElement();
        this.createOptionsElement();
        this.createOptionElement();

        this.parentTemplate.appendChild(this.selectedTemplate);
        this.parentTemplate.appendChild(this.optionsTemplate);

    },

    createParentElement() {

        this.parentTemplate = this.createElement('div', {
            'class': 'selector-element',
            'data-reference': '',
            'data-type': '',
            'id': ''
        });

    },

    createSelectedElement() {

        this.selectedTemplate = this.createElement('div', {
            'class': 'selector-selected'
        });

        this.selectedTemplate.appendChild(
            this.createElement('p', {
                'class': 'selected-text'
            })
        );

    },

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

    },

    createOptionsElement() {

        this.optionsTemplate = this.createElement('div', {
            'class': 'selector-options'
        });

    },

    createOptionElement() {

        this.optionTemplate = this.createElement('div', {
            'class': 'selector-option',
            'data-item': ''
        });

        this.optionTemplate.appendChild(
            this.createElement('span', {
                'class': 'option-text'
            })
        );

    },

    createFilterElement() {

        this.filterTemplate = this.createElement('div', {
            'class': 'selector-filter'
        });

        this.filterTemplate.appendChild(
            this.createElement('input', {
                'class': 'selector-filter-input',
                'type': 'search',
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