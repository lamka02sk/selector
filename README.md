# selector v2.0
The simplest vanilla JavaScript plugin for beautiful selects.

**Features:**
- fast, beautiful and simple
- easy customization
- easy installation and initialization

## Usage
####1. Include plugin source located in 'scripts/main.min.js'
```html
<script type="application/javascript" src="scripts/main.min.js"></script>
```

####2. Initialize Selector plugin in your JS file.
Simply create a new instance of Selector class.
```javascript
new Selector();
```

##### 2.1 Constructor Parameters
Selector only support one parameter by now.
###### 2.1.1 Parameter: *Custom selector*
The default selector for Selector elements is `select.selector-instance`. If you want to initialize Selector on custom selector, pass object with key `selector` where value is the new selector. 
For example:
```javascript
new Selector({
    selector: 'your-custom-selector-here'
});
```

**For more examples, see index.html file.**

*Note: Work in progress. May contain bugs. If you'll find any, let me know!*