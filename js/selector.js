// Close selector options when click anywhere
document.querySelector("html").addEventListener("click", turnOffSelector);

function turnOffSelector(event) {

    if(event.target.classList.contains("selector-options") || event.target.classList.contains("selector-selected")) {
        return false;
    }

    let selects = document.querySelectorAll(".selector-options");
    let selectsLen = selects.length;
    for(i = 0; i < selectsLen; ++i) {
        selects[i].classList.remove("opened");
    }

    if(event.target.classList.contains("selector-part") || event.target.parentNode.classList.contains("selector-part")) {
        event.preventDefault();
    }

}

// Open and close selector
let selectors = document.querySelectorAll(".selector-selected");
let selectorsLen = selectors.length;
for(let i = 0; i < selectorsLen; ++i) {
    selectors[i].addEventListener("click", toggleSelect);
}

function toggleSelect(event) {

    // Get selector id
    let parent = event.target.parentElement;

    let selector = "#" + parent.id + " .selector-options";

    // Close every selector options
    let selectors = document.querySelectorAll(".selector-options");
    let selectorsLen = selectors.length;
    for(let i = 0; i < selectorsLen; ++i) {

        // Get selector id
        let parentI = selectors[i].parentElement;

        if(parent.id === parentI.id) {
            continue;
        }

        let selectorI = "#" + parentI.id + " .selector-options";

        document.querySelector(selectorI).classList.remove("opened");

    }

    // Toggle options list class
    document.querySelector(selector).classList.toggle("opened");

    event.preventDefault();

}

// Click option
let options = document.querySelectorAll(".selector-option");
let optionsLen = options.length;
for(let i = 0; i < optionsLen; ++i) {
    options[i].addEventListener("click", chooseOption);
}

function chooseOption(event) {

    // Choose clicked option
    let optionValue = this.getAttribute("data-value");
    let optionContent = this.innerHTML;
    let selectName = this.parentElement.parentElement.id;
    let selectElement = document.querySelector("select[name=" + selectName + "]");

    // Change selected option
    let selectorSelectedWrapper = document.getElementById(selectName);
    let selectorSelectedElement = selectorSelectedWrapper.childNodes[1];

    // Remove selected class from all options
    let siblings = this.parentNode.childNodes;

    selectorSelectedElement.innerHTML = optionContent;
    selectorSelectedElement.setAttribute("data-value", optionValue);

    let currentSelectOption = selectElement;
    let selectElementLen = selectElement.length;
    for(let i = 0; i < selectElementLen; ++i) {
        selectElement[i].removeAttribute("selected");
        if(selectElement[i].getAttribute("value") === optionValue) {
            currentSelectOption = selectElement[i];
        }
    }

    let siblingsLen = siblings.length;
    for(let i = 0; i < siblingsLen; ++i) {
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