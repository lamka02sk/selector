/**
 * Selector Class Constructor
 * @constructor
 */
function Selector(parameters) {

    // Variables
    this.elements = {};
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

    // Save instance content
    this.saveContent(element);

    // Render instance elements
    this.renderInstance();

    // Create events
    this.createEvents();

};

/**
 * Selector saveContent Function
 * Stores user defined content and attributes for current element
 */
Selector.prototype.saveContent = function(element) {

    // Save element name
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
        for(let j = 0; j < childAttributes.length; ++j)
            this.elementsStructure[elementName][i][childAttributes[j].name] = childAttributes[j].value;
    }

};