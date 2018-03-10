!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Selector=t():e.Selector=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(13),i=r(l),a=n(1);r(a);t.default={parentTemplate:void 0,selectedTemplate:void 0,groupTemplate:void 0,optionsTemplate:void 0,optionTemplate:void 0,filterTemplate:void 0,constructor:function(e,t){this.Settings=t,this.element=e,this.createElements();var n=new i.default(e,t);n.renderParent(),n.renderContent(),n.renderSelected(),n.show()},isFilterType:function(){return"filter"===this.Settings.type||(this.element.getAttribute("data-type")||"").match(/(search)|(find)/)},createElement:function(e,t){var n=document.createElement(e);return Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])}),n},createElements:function(){this.createParentElement(),this.createSelectedElement(),this.createGroupElement(),this.createOptionsElement(),this.createOptionElement(),this.parentTemplate.appendChild(this.selectedTemplate),this.parentTemplate.appendChild(this.optionsTemplate)},createParentElement:function(){this.parentTemplate=this.createElement("div",{class:"selector-element","data-reference":"","data-type":"",id:""})},createSelectedElement:function(){this.selectedTemplate=this.createElement("div",{class:"selector-selected"}),this.selectedTemplate.appendChild(this.createElement("p",{class:"selected-text"}))},createGroupElement:function(){this.groupTemplate=this.createElement("div",{class:"selector-group","data-group":""}),this.groupTemplate.appendChild(this.createElement("span",{class:"group-text"}))},createOptionsElement:function(){this.optionsTemplate=this.createElement("div",{class:"selector-options"})},createOptionElement:function(){this.optionTemplate=this.createElement("div",{class:"selector-option show","data-item":""}),this.optionTemplate.appendChild(this.createElement("span",{class:"option-text"}))},createFilterElement:function(){this.filterTemplate=this.createElement("div",{class:"selector-filter"}),this.filterTemplate.appendChild(this.createElement("input",{class:"selector-filter-input",type:"search","data-placeholder":"SELECTOR_FILTER_PLACEHOLDER",placeholder:"Filter options"})),this.filterTemplate.appendChild(this.createElement("span",{class:"selector-filter-clear"}))}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i),o=function(){function e(t){r(this,e),this.Settings=t}return l(e,[{key:"showOptions",value:function(e,t){var n=this.Settings.data,r=a.default.isFilterType(),l=t.matches("[data-disabled]");t.querySelector(".selector-selected").addEventListener("click",function(i){if(l)return!1;if(e.classList.toggle("visible"),i.currentTarget.classList.toggle("visible"),r){var a=t.querySelector("input");a.focus(),a.value="",a.oninput()}e.classList.contains("visible")?n.closed?n.closed():n.onClose&&n.onClose():n.opened?n.opened():n.onOpen&&n.onOpen()})}},{key:"clearFilter",value:function(e,t){e.addEventListener("click",function(){t.value="",t.oninput()})}},{key:"filterOptions",value:function(e,t){var n=e.querySelector("input"),r=t.querySelector(".selector-options");this.clearFilter(e.querySelector("span"),n),this.createIndex(r),n.oninput=function(){var e=n.value.trim().toLowerCase(),t=r.querySelectorAll(".selector-option");JSON.parse(r.dataset.index).forEach(function(n,r){-1!==n[0].indexOf(e)||-1!==n[1].indexOf(e)?t[r].classList.add("show"):t[r].classList.remove("show")})},n.onkeyup=function(e){if(e.keyCode&&13===e.keyCode){var n=t.querySelectorAll(".selector-option.show");if(1!==n.length)return!1;n[0].click()}}}},{key:"createIndex",value:function(e){var t=Array.from(e.querySelectorAll(".selector-option")).map(function(e){return[e.children[0].innerText.toLowerCase(),e.dataset.item.toLowerCase()]});e.dataset.index=JSON.stringify(t)}},{key:"select",value:function(e){var t=e.querySelector(".selector-selected"),n=this.Settings.data,r=document.querySelector('select[name="'+e.dataset.reference+'"]');e.querySelector(".selector-options").addEventListener("click",function(l){var i=l.target,a=".selector-option";if(i.matches(a)||i.parentNode.matches(a)){if(i.matches(a)||(i=i.parentNode),i.dataset.disabled||i.dataset.selected||i.parentNode.matches("[data-disabled]"))return!1;var o=e.querySelector("[data-selected]"),s=i.dataset.item;n.beforeSelect&&n.beforeSelect(e,s),delete o.dataset.selected,i.dataset.selected="",t.dataset.item=s,t.children[0].innerText=i.children[0].innerText,t.click(),r.querySelector("[selected]").removeAttribute("selected"),r.querySelector('[value="'+i.dataset.item+'"]').setAttribute("selected","true"),n.selected?n.selected(e,i.dataset.item):n.onSelect&&n.onSelect(e,i)}})}}],[{key:"closeSelector",value:function(){document.addEventListener("click",function(e){document.querySelectorAll(".selector-element").forEach(function(t){e.target===t||t.contains(e.target)||t.querySelectorAll(".selector-options, .selector-selected").forEach(function(e){return e.classList.remove("visible")})})})}}]),e}();t.default=o},,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(11),o=r(a),s=n(12),c=r(s);e.exports=function(){function e(t){l(this,e),this.Settings=new o.default(t),c.default.constructor(this.Settings)}return i(e,[{key:"destroy",value:function(){c.default.destroy()}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){var n=this;r(this,e),this.data={selector:null,callback:null,onOpen:null,onClose:null,onSelect:null,destroy:null,element:null,created:null,opened:null,closed:null,selected:null,beforeCreate:null,beforeSelect:null,beforeDestroy:null,destroyed:null,label:null,type:null},Object.keys(t).forEach(function(e){n.data[e]=t[e]})}return l(e,[{key:"set",value:function(e,t){this.data[e]=t}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=r(l),a=n(1),o=r(a);t.default={constructor:function(e){this.Settings=e,this.prepareElements(),this.render()},prepareElements:function(){var e=this.Settings.data.element;if("string"==typeof e){if(e=document.querySelectorAll(e),0===e.length)throw new DOMException;this.Settings.set("element",e)}},render:function(){var e=this;this.Settings.data.element.forEach(function(t){if(!e.checkElement(t))return!1;i.default.constructor(t,e.Settings)}),o.default.closeSelector()},checkElement:function(e){return!!e.nodeType&&"SELECT"===e.tagName},destroy:function(){var e=this.Settings.data;e.beforeDestroy&&e.beforeDestroy(),e.element.forEach(function(e){var t=e.parentNode;t.removeChild(t.querySelector('[data-reference="'+e.name+'"]')),e.style.display=""}),e.destroyed&&e.destroyed()}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=r(a),s=n(1),c=r(s),u=function(){function e(t,n){l(this,e),this.Settings=n,this.Events=new c.default(n),this._element=t,this.hideOrigin(),this._render=null}return i(e,[{key:"hideOrigin",value:function(){this._element.style.display="none"}},{key:"renderParent",value:function(){var e=o.default.parentTemplate.cloneNode(!0);e.id=this._element.id,e.dataset.reference=this._element.name,e.dataset.type=this.Settings.type||this._element.dataset.type||"default",this._element.disabled&&(e.dataset.disabled=!0),this._render=e}},{key:"renderContent",value:function(){var e=this,t=void 0,n=this._render.querySelector(".selector-options");if(this.Events.showOptions(n,this._render),o.default.isFilterType()){var r=this.renderSearch();n.appendChild(r),this.Events.filterOptions(r,this._render)}Array.from(this._element.children).forEach(function(r){var l=r.tagName;if("OPTGROUP"===l)t=e.renderGroup(r);else{if("OPTION"!==l)return!0;t=e.renderOption(r)}n.appendChild(t)}),o.default.isFilterType()&&this.Events.createIndex(n),this.Events.select(this._render)}},{key:"renderSearch",value:function(){return void 0===o.default.filterTemplate&&o.default.createFilterElement(),o.default.filterTemplate.cloneNode(!0)}},{key:"renderGroup",value:function(e){var t=this,n=o.default.groupTemplate.cloneNode(!0);return n.dataset.group=n.children[0].innerText=e.label,e.disabled&&(n.dataset.disabled=!0),Array.from(e.children).forEach(function(e){n.appendChild(t.renderOption(e))}),n}},{key:"renderOption",value:function(e){var t=o.default.optionTemplate.cloneNode(!0);return Object.keys(e.dataset).forEach(function(n){t.dataset[n]=e.dataset[n]}),t.dataset.item=e.value,t.children[0].innerText=e.innerText,e.disabled&&(t.dataset.disabled=!0),e.selected&&(t.dataset.selected=!0),t}},{key:"renderSelected",value:function(){var e=this._render.querySelector(".selector-selected"),t=this._element.querySelector("[selected]");t?(e.dataset.item=t.value,e.children[0].innerText=t.innerText):(e.dataset.item=null,e.children[0].innerText="---"),this._element.dataset.label?e.children[0].innerText=this._element.dataset.label:this.Settings.label&&(e.children[0].innerText=this.Settings.label)}},{key:"show",value:function(){var e=this.Settings.data;e.beforeCreate&&e.beforeCreate(),this._element.parentNode.insertBefore(this._render,this._element.nextSibling),e.created?e.created():e.callback&&e.callback()}}]),e}();t.default=u}])});