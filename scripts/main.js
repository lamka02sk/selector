/**
 * Selector Class Constructor
 * @constructor
 */
function Selector(parameters) {

    // Selector Default Settings
    this.config = {
        element: 'select.selector-instance'
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

};

/**
 * Selector getElements Function
 * Create a list of all elements to change to Selector
 */
Selector.prototype.getElements = function() {

    var instanceElements = document.querySelectorAll(this.config.element);

};