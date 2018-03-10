# selector v3.16
> Makes selects great again

When it comes to selects, many people just don't care and use default one. Sometimes it's fine, but if you need more
customization, search and beautiful select, you need to use something else.
This is **selector**. A *small* and yet very *powerful* select plugin. Built with webpack and ES6. Only **2.9KB**
gzipped!

## Features
- Fully customizable
- Lifecycle hooks and events
- Blazingly fast search feature thanks to options indexing
- Very small, only 2.9KB gzipped
- Easy to install and use with npm or yarn
- Works with webpack
- Fully compatibile with version 2! Check selector v2 for compatibile methods

## How to install selector?
### npm and yarn
```javascript
npm install selector3 --save-dev
yarn add selector3 --dev
```
Then just require it in your project and you are good to go!

### CDN
In case you prefer using CDN services over hosting libraries locally, there is a option to use it.
```html
<script src="https://cdn.jsdelivr.net/npm/selector3@3/dist/theme.js"></script>
<script src="https://cdn.jsdelivr.net/npm/selector3@3/dist/selector.js"></script>
or both at once
<script src="https://cdn.jsdelivr.net/npm/selector3@3/dist/bundle.js"></script>
```

### Add files manually
If you don't use any package manager and build tools, you can still download `dist/` files manually and include them
in your HTML.

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
});
```

### Options, methods and hooks
#### `element` option
Defined element where selector initializes. It has to be `select` HTML element, otherwise it won't initialize.
Whether you can define it as string selector or pass the actual element in it. jQuery instance is **NOT** supported.
```javascript
new Selector({
    element: 'select.my-class'
});
```
or
```javascript
const selectElements = document.querySelectorAll('select');
new Selector({
    element: selectElements
});
```

#### `beforeCreate` hook
This hook method is exetuted before selector instance is rendered and ready to use.
```javascript
new Selector({
    element: 'select.my-class',
    beforeCreate() {
        console.log('Hello world!');
    }
});
```

#### `created` hook
This hook method is exetuted when selector instance is rendered and ready to use.
```javascript
new Selector({
    element: 'select.my-class',
    created() {
        console.log('Hello world!');
    }
});
```

#### `opened` event
When user clicks on selector element and opens it.
```javascript
new Selector({
    element: 'select.my-class',
    opened() {
        console.log('Opened!');
    }
});
```

#### `closed` event
When user clicks on selector element and closes it.
```javascript
new Selector({
    element: 'select.my-class',
    closed() {
        console.log('Closed!');
    }
});
```

#### `beforeSelect` event
Called before value of original `select` is actually changed.
`instanceElement` is generated selector parent element
`selectedItem` is value of selected `option`
```javascript
new Selector({
    element: 'select.my-class',
    beforeSelect(instanceElement, selectedItem) {
        console.log('beforeSelect!');
    }
});
```

#### `selected` event
On option select.
`instanceElement` is generated selector parent element
`selectedItem` is value of selected `option`
```javascript
new Selector({
    element: 'select.my-class',
    selected(instanceElement, selectedItem) {
        console.log('Selected!');
    }
});
```

#### `beforeDestroy` hook
Before instance is destroyed
```javascript
new Selector({
    element: 'select.my-class',
    beforeDestroy() {
        console.log('I am being destroyed!');
    }
});
```

#### `destroyed` hook
After element instance is actually destroyed.
```javascript
new Selector({
    element: 'select.my-class',
    destroyed() {
        console.log('I am destroyed already!');
    }
});
```

#### `label` option
Title of selector displayed when user didn't select any option yet.
```javascript
new Selector({
    element: 'select.my-class',
    label: 'My selector'
});
```

#### `type` option
Type of selector. At the moment selector has two types: `normal` and `filter`.
You don't have to provide this option except you want filter inside your selector. Default option is `normal`.
If you want to use filter only in some instances, use `data-type` attribute with value `find` or `search` instead.
```javascript
new Selector({
    element: 'select.my-class',
    type: 'filter'
});
```
or using `data-type` attribute:
```html
<select name="selector" id="selector" data-type="search">
    <option value="0" selected>Option 1</option>
    <option value="1">Option 2</option>
</select>
```