# selector v4
> Makes selects great again

When it comes to selects, many people just don't care and use default one. Sometimes it's fine, but if you need more
customization, search and beautiful select, you need to use something else.
This is **selector**. A *small* yet very *powerful* select plugin. Built with Vite and modern JS. Only **4.2KB**
gzipped (CSS and icons included)!

## Features
- Fully customizable
- Lifecycle hooks and events
- Blazingly fast search feature thanks to options indexing
- Very small, only 4.2KB minified + gzipped, including CSS theme and icons!
- Easy to install and use with npm or yarn
- Built with Vite
- Fully compatible with version 2 and 3! Check selector v2/v3 for compatible methods

## How to install selector?
### npm and yarn
```javascript
npm install selector3 --save-dev
yarn add selector3 --dev
```
Then just require it in your project and you are good to go!
```

### Add files manually
If you don't use any package manager or build tools, you can still download `dist/` folder manually and include them
in your HTML. Just remember that the `main.js` file needs `type="module"` attribute to work.

## How to use it?
It's pretty simple. You don't have to be genius to use this library. Anyone can!

### Initialize library
```html
<select name="selector" id="selector" data-label="Hello there!">
    <option value="0" selected>Option 1</option>
    <option value="1">Option 2</option>
    <option value="2">Option 3</option>
    <option value="3">Option 4</option>
    <option value="4">Option 5</option>
</select>
```
and JS:
```javascript
new Selector({
    element: '#selector'
})
```

### Options, methods and hooks
#### `element` option
Defined element where selector initializes. It has to be `select` HTML element, otherwise it won't initialize.
Whether you can define it as string selector or pass the actual element in it.
```javascript
new Selector({
    element: 'select.my-class'
})
```
or
```javascript
const selectElements = document.querySelectorAll('select')
new Selector({
    element: selectElements
})
```

#### `beforeCreate` hook
This hook method is exetuted before selector instance is rendered and ready to use.
```javascript
new Selector({
    element: 'select.my-class',
    beforeCreate() {
        console.log('Hello world!');
    }
})
```

#### `created` hook
This hook method is exetuted when selector instance is rendered and ready to use.
```javascript
new Selector({
    element: 'select.my-class',
    created() {
        console.log('Hello world!')
    }
})
```

#### `opened` event
When user clicks on selector element and opens it.
```javascript
new Selector({
    element: 'select.my-class',
    opened() {
        console.log('Opened!')
    }
})
```

#### `closed` event
When user clicks on selector element and closes it.
```javascript
new Selector({
    element: 'select.my-class',
    closed() {
        console.log('Closed!')
    }
})
```

#### `beforeSelect` event
Called before value of original `select` is actually changed.
`instanceElement` is generated selector parent element
`selectedItem` is value of selected `option`
```javascript
new Selector({
    element: 'select.my-class',
    beforeSelect(instanceElement, selectedItem) {
        console.log('beforeSelect!')
    }
})
```

#### `selected` event
On option select.
`instanceElement` is generated selector parent element
`selectedItem` is value of selected `option`
```javascript
new Selector({
    element: 'select.my-class',
    selected(instanceElement, selectedItem) {
        console.log('Selected!')
    }
})
```

#### `beforeDestroy` hook
Before instance is destroyed with `destroy()` instance method.
```javascript
new Selector({
    element: 'select.my-class',
    beforeDestroy() {
        console.log('I am being destroyed!')
    }
})
```

#### `destroyed` hook
After element instance is actually destroyed with `destroy()` instance method.
```javascript
new Selector({
    element: 'select.my-class',
    destroyed() {
        console.log('I am destroyed already!')
    }
})
```

#### `label` option
Title of selector displayed when user didn't select any option yet.
```javascript
new Selector({
    element: 'select.my-class',
    label: 'My selector'
})
```

#### `type` option
Type of selector. At the moment selector has two types: `normal` and `filter`.
You don't have to provide this option except you want filter inside your selector. Default option is `normal`.
If you want to use filter only in some instances, use `data-type` attribute with value `find` or `search` instead.
```javascript
new Selector({
    element: 'select.my-class',
    type: 'filter'
})
```
or using `data-type` attribute:
```html
<select name="selector" id="selector" data-type="search">
    <option value="0" selected>Option 1</option>
    <option value="1">Option 2</option>
</select>
```

### New in 3.1
#### `disabled` option
It is now simple to disable selector instance by setting this option to true. If you don't want to apply disable rule
for every element at the beginning, use rather instance methods `enable(element)` and `disable(element)`. The `element`
parameter is optional if you want to enable/disable all selects. If you only need to affect single select you need to
specify which select should be affected. See example below for more.
```javascript
let instance = new Selector({
    element: 'select.my-class, .my-another-select',
    disabled: true
})

// Query element we want to disable (NOTE that we are querying the original select element)
// Also, don't use .querySelectorAll, it won't work at all!
let disableElement = document.querySelector('select.my-class')

instance.enable()
instance.disable(disableElement)
```

### New in 3.2
#### `identifier` option
If you need to use more selector instances on single page, you can use identifier option to distinguish between these
instances in DOM. If this option is set, every element in instance has `data-identifier` attribute with given value.
```javascript
new Selector({
    element: 'select.my-class',
    identifier: 'firstInstance'
})
```

#### `cover` option
If set to `true` opened options cover selected item box.
```javascript
new Selector({
    element: 'select.my-class',
    cover: true
})
```

#### `relative` option
If set to `true` dropdown is relative positioned.
```javascript
new Selector({
    element: 'select.my-class',
    relative: true
})
```
