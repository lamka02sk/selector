var i;

// Close selector options when click anywhere
document.querySelector("html").addEventListener("click", turnOffselector);

function turnOffselector(event) {

    if(event.target.classList.contains("selector-options") || event.target.classList.contains("selector-selected")) {
        return false;
    }

    var selects = document.querySelectorAll(".selector-options");
    for(i = 0; i < selects.length; i++) {
        selects[i].classList.remove("opened");
    }

    event.preventDefault();

}

// Open and close selector
document.querySelector(".selector-selected").addEventListener("click", toggleSelect);

function toggleSelect(event) {

    // Toggle options list class
    document.querySelector(".selector-options").classList.toggle("opened");

    event.preventDefault();

}

// Click option
var options = document.querySelectorAll(".selector-option");

for(i = 0; i < options.length; i++) {
    options[i].addEventListener("click", chooseOption);
}

function chooseOption(event) {

    // Choose clicked option
    var optionValue = this.getAttribute("data-value");
    var optionContent = this.innerHTML;
    var selectName = this.parentElement.parentElement.id;
    var selectElement = document.querySelector("select[name=" + selectName + "]");

    // Change selected option
    var selectorSelectedWrapper = document.getElementById(selectName);
    var selectorSelectedElement = selectorSelectedWrapper.childNodes[1];

    // Remove selected class from all options
    var siblings = this.parentNode.childNodes;

    selectorSelectedElement.innerHTML = optionContent;
    selectorSelectedElement.setAttribute("data-value", optionValue);

    var currentSelectOption = selectElement;
    for(i = 0; i < selectElement.length; i++) {
        selectElement[i].removeAttribute("selected");
        if(selectElement[i].getAttribute("value") === optionValue) {
            currentSelectOption = selectElement[i];
        }
    }

    for(i = 0; i < +siblings.length; i++) {
        if(i % 2 !== 0 && i !== 0) {
            siblings[i].removeAttribute("selected");
            if(siblings[i].getAttribute("data-value") === optionValue) {
                siblings[i].classList.add("selector-option-selected");
            } else {
                siblings[i].classList.remove("selector-option-selected");
            }
        }
    }

    currentSelectOption.setAttribute("selected", "");

    // Close selector options
    toggleSelect(event);

    event.preventDefault();

}