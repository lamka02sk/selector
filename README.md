# <img src="https://raw.githubusercontent.com/lamka02sk/selector/master/assets/logo.png" width="160">
The simplest vanilla JavaScript plugin for beautiful selects.

**Features:**
- fast, beautiful and simple
- easy customization
- easy installation and initialization

## Usage
### 1. Include plugin source located in 'scripts/main.min.js'
```html
<script type="application/javascript" src="scripts/main.min.js"></script>
```

### 2. Initialize Selector plugin in your JS file.
Simply create a new instance of Selector class.
```javascript
new Selector();
```

#### 2.1 Constructor Parameters
##### 2.1.1 Parameter: *Custom selector*
The default selector for Selector elements is `select.selector-instance`. If you want to initialize Selector on custom selector, pass object with key `selector` where value is the new selector. 
For example:
```javascript
new Selector({
    selector: 'your-custom-selector-here'
});
```
##### 2.1.2 Parameter: *callback*
Callback parameter allows you to create your own function executed when the Selector instances are all ready.
For example:
```javascript
new Selector({
    callback: function(elements) {
        console.log('Selector is ready and here are user defined elements used to generate Selector instances: ');
        console.log(elements);
    }
});
```
##### 2.1.3 Callback parameter: *onOpen*
Callback function parameter `onOpen` will execute your function when any Selector instance is opened.
For example:
```javascript
new Selector({
    onOpen: function(instance) {
        console.log('This Selector instance was opened: ');
        console.log(instance);
    }
});
```
##### 2.1.4 Callback parameter: *onClose*
Callback function parameter `onClose` will execute your function when any Selector instance is closed.
For example:
```javascript
new Selector({
    onClose: function(instance) {
        console.log('This Selector instance was closed: ');
        console.log(instance);
    }
});
```
##### 2.1.5 Callback parameter: *onSelect*
Callback function parameter `onSelect` will execute your function when any Selector instance selected option has changed.
For example:
```javascript
new Selector({
    onSelect: function(instance, option) {
        console.log('The selected option of instance: ');
        console.log(instance);
        console.log(', has changed to: ');
        console.log(option);
    }
});
```

**For more examples, see index.html file.**

*Note: Work in progress. May contain bugs. If you'll find any, let me know!*
