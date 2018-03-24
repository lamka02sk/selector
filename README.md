# selector Lite v3
> Makes selects great again

When it comes to selects, many people just don't care and use default one. Sometimes it's fine, but if you need more
customization and beautiful select, you need to use something else. And yes, it is small and fast, no useless features.
This is **selector**. A *small* and yet very *powerful* select plugin. Built with webpack and ES6. Only **2.5KB**
gzipped!

## **WARNING: ** This version is not compatible with selector 2.0!

## Features
- Fully customizable
- Lifecycle hooks and events
- Very small, only 2.5KB minified + gzipped
- Easy to install and use with npm or yarn
- Works with webpack

## How to install selector?
### npm and yarn
```javascript
npm install selector3@lite --save-dev
yarn add selector3@lite --dev
```
Then just require it in your project and you are good to go!

### CDN
In case you prefer using CDN services over hosting libraries locally, there is a option to use it.
```html
<script src="https://cdn.jsdelivr.net/npm/selector3@lite/dist/theme.js"></script>
<script src="https://cdn.jsdelivr.net/npm/selector3@lite/dist/selector.js"></script>
or both at once
<script src="https://cdn.jsdelivr.net/npm/selector3@lite/dist/bundle.js"></script>
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
Before instance is destroyed with `destroy()` instance method.
```javascript
new Selector({
    element: 'select.my-class',
    beforeDestroy() {
        console.log('I am being destroyed!');
    }
});
```

#### `destroyed` hook
After element instance is actually destroyed with `destroy()` instance method.
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

#### `identifier` option
If you need to use more selector instances on single page, you can use identifier option to distinguish between these
instances in DOM. If this option is set, every element in instance has `data-identifier` attribute with given value.
```javascript
let instance = new Selector({
    element: 'select.my-class',
    identifier: 'firstInstance'
});
```

#### `cover` option
If set to `true` opened options cover selected item box.
```javascript
let instance = new Selector({
    element: 'select.my-class',
    cover: true
});
```

#### `relative` option
If set to `true` dropdown is relative positioned.
```javascript
let instance = new Selector({
    element: 'select.my-class',
    relative: true
});
```