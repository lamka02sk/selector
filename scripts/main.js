/**
 * Selector Class Constructor
 * @constructor
 */
function Selector(parameters) {

    // Variables
    this.elements = {};
    this.currentElement = {};
    this.elementsStructure = {};

    // Selector Default Settings
    this.config = {
        selector: 'select.selector-instance'
    };

    // Save given parameters
    this.parameters = parameters;

    // Run core
    this.core();

}

/**
 * Selector core Function
 * Controls the entire instance and Selector elements
 */
Selector.prototype.core = function() {

    // Get all instance elements
    this.getElements();

    // Create Selector elements for each instance element
    for(let i = 0; i < this.elements.length; ++i)
        this.createInstance(this.elements[i]);

};

/**
 * Selector getElements Function
 * Create a list of all elements to change to Selector
 */
Selector.prototype.getElements = function() {

    // Query all selectors
    this.elements = document.querySelectorAll(this.config.selector);

};

/**
 * Selector createInstance Function
 * Create instance, events and render elements
 */
Selector.prototype.createInstance = function(element) {

    // Save current element
    this.currentElement = element;

    // Save instance content
    this.saveContent();

    // Render instance elements
    this.renderInstance();

    // Create events
    //this.createEvents();

};

/**
 * Selector saveContent Function
 * Stores user defined content and attributes for current element
 */
Selector.prototype.saveContent = function() {

    // Save element name
    let element = this.currentElement;
    let elementName = element.tagName.toLowerCase();
    this.elementsStructure[elementName] = {};

    // Save parent attributes
    let attributes = element.attributes;
    for(let i = 0; i < attributes.length; ++i)
        this.elementsStructure[elementName][attributes[i].name] = attributes[i].value;

    // Save children
    for(let i = 0; i < element.childElementCount; ++i) {
        let childElementName = element[i].tagName.toLowerCase();
        this.elementsStructure[elementName][i] = {};
        this.elementsStructure[elementName][i].tag = childElementName;
        let childAttributes = element[i].attributes;
        this.elementsStructure[elementName][i].text = element[i].text;
        for(let j = 0; j < childAttributes.length; ++j)
            this.elementsStructure[elementName][i][childAttributes[j].name] = childAttributes[j].value;
    }

};

/**
 * Selector renderInstance Function
 * Render instance Selector element
 */
Selector.prototype.renderInstance = function() {

    // Create parent instance element
    let parent = this.renderParent();

    // Create options instance element
    let options = this.renderOptions();

    // Create selected instance element
    let selectedElement = options.querySelector('div.option-selected');
    let selected = this.renderSelected(selectedElement);

    // Connect parts together
    parent.appendChild(selected);
    parent.appendChild(options);

    // Show element in browser and hide original user defined
    this.currentElement.style.display = 'none';
    this.currentElement.parentNode.insertBefore(parent, this.currentElement.nextSibling);

};

/**
 * Selector renderParent Function
 * Pre-renders parent instance element
 * @returns {Element}
 */
Selector.prototype.renderParent = function() {

    let parent = document.createElement('div');
    parent.className = 'selector-element';
    parent.dataset.reference = this.elementsStructure.select.name;
    return parent;

};

/**
 * Selector renderSelected Function
 * Pre-renders selected instance element
 * @returns {Element}
 */
Selector.prototype.renderSelected = function(selectedElement) {

    let selected = document.createElement('div');
    selected.className = 'selector-selected';
    let selectedText = document.createElement('p');
    selectedText.className = 'selected-text';

    // Add attributes to selected element + content
    selectedText.innerText = selectedElement.innerText;
    for(let i in selectedElement.dataset)
        selected.dataset[i] = selectedElement.dataset[i];

    selected.appendChild(selectedText);
    return selected;

};

/**
 * Selector renderOptions Function
 * Pre-renders options instance element
 * @returns {Element}
 */
Selector.prototype.renderOptions = function() {

    // Append each option to options
    let options = document.createElement('div');
    options.className = 'selector-options';
    for(let i = 0; i < this.currentElement.childElementCount; ++i) {

        let option = document.createElement('div');
        option.className = 'selector-option';
        let optionText;

        for(let j in this.elementsStructure['select'][i]) {

            let valueIndex = j;
            if(j == 'tag') continue;

            if(j == 'value')
                j = 'data-value';

            if(j == 'selected' || j == 'disabled') {
                this.elementsStructure['select'][i][valueIndex] = 'true';
                option.className += ' option-' + j;
                continue;
            }

            if(j == 'text') {
                optionText = document.createElement('span');
                optionText.className = 'option-text';
                optionText.innerText = this.elementsStructure['select'][i][valueIndex];
                continue;
            }

            option.setAttribute(j, this.elementsStructure['select'][i][valueIndex]);

        }

        option.setAttribute('data-item', i);
        option.appendChild(optionText);
        options.appendChild(option);

    }

    return options;

};