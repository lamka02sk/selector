/**
 * Selector Class Constructor
 * @constructor
 */
function Selector(parameters) {

    // Variables
    this.elements = {};
    this.currentElement = {};
    this.currentInstance = {};

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
        this.createInstance(this.elements[i], i);

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
Selector.prototype.createInstance = function(element, i) {

    // Save current element
    this.currentElement = element;

    // Render instance elements
    this.renderInstance();

    // Create events
    this.createEvents();

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

    // Save the instance
    this.currentInstance = parent;

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
    parent.dataset.reference = this.currentElement.name;
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

        let optionText = document.createElement('span');
        optionText.className = 'option-text';
        optionText.innerText = this.currentElement[i].innerText;

        for(let j = 0; j < this.currentElement[i].attributes.length; ++j) {

            let attribute = this.currentElement[i].attributes[j];
            if(attribute.name == 'value')
                attribute.name = 'data-value';

            if(attribute.name == 'selected' || attribute.name == 'disabled') {
                attribute.value = 'true';
                option.className += ' option-' + attribute.name;
                continue;
            }

            option.setAttribute(attribute.name, attribute.value);

        }

        option.setAttribute('data-item', i);
        option.appendChild(optionText);
        options.appendChild(option);

    }

    return options;

};

/**
 * Selector createEvents Function
 * Create user input events to get the instance to work
 */
Selector.prototype.createEvents = function() {

    // Current instance variables and function aliases
    let currentInstance = this.currentInstance;
    let instanceSelected = this.currentInstance.querySelector('div.selector-selected');
    let instanceOptions = this.currentInstance.querySelector('div.selector-options');

    // Open / Close on selected button click
    instanceSelected.onclick = function() {
        currentInstance.classList.toggle('open');
    };

    // Change selected on click on option element
    instanceOptions.onclick = function(clicked) {
        this.changeSelectedOption(clicked);
    }.bind(this);

};

/**
 * Selector changeSelectedOption Function
 * @param clicked
 */
Selector.prototype.changeSelectedOption = function(clicked) {

    let target = clicked.target;
    if(!target.firstElementChild)
        target = target.parentNode;

    let dataset = target.dataset;
    let text = target.innerText;
    let instanceParent = target.parentNode.parentNode;
    let selected = instanceParent.querySelector('div.selector-selected');
    let options = instanceParent.querySelector('div.selector-options');

    for(let i in selected.dataset)
        selected.removeAttribute('data-' + i);

    for(let i in dataset)
        selected.setAttribute('data-' + i, dataset[i]);

    selected.querySelector('p').innerText = text;
    options.querySelector('div.option-selected').classList.remove('option-selected');
    target.classList.add('option-selected');

    // Change value of default select element
    let parentSelect = instanceParent.previousSibling;
    console.log(parentSelect.tagName);
    if(parentSelect.tagName !== 'SELECT')
        parentSelect = document.querySelector('select[name="' + instanceParent.getAttribute('data-reference') + '"]');
    let selectedNew = selected.getAttribute('data-item');
    let selectOptions = parentSelect.querySelectorAll('option');
    for(let i = 0; i < selectOptions.length; ++i)
        selectOptions[i].removeAttribute('selected');
    selectOptions[selectedNew].setAttribute('selected', 'true');

    selected.click();

};

// Close Selectors on click outside
document.onclick = function(clicked) {
    let SelectorInstances = document.querySelectorAll('div.selector-element');
    let target = clicked.target;
    for(let i = 0; i < SelectorInstances.length; ++i) {
        if(target !== SelectorInstances[i] && !SelectorInstances[i].contains(target))
            SelectorInstances[i].classList.remove('open');
    }
};