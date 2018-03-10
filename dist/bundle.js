!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Selector=t():e.Selector=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=r(o);r(n(1)),t.default={parentTemplate:void 0,selectedTemplate:void 0,groupTemplate:void 0,optionsTemplate:void 0,optionTemplate:void 0,filterTemplate:void 0,constructor:function(e,t){this.Settings=t,this.element=e,this.createElements();var n=new i.default(e,t);n.renderParent(),n.renderContent(),n.renderSelected(),n.show()},isFilterType:function(){return"filter"===this.Settings.type||(this.element.getAttribute("data-type")||"").match(/(search)|(find)/)},createElement:function(e,t){var n=document.createElement(e);return Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])}),n},createElements:function(){this.createParentElement(),this.createSelectedElement(),this.createGroupElement(),this.createOptionsElement(),this.createOptionElement(),this.parentTemplate.appendChild(this.selectedTemplate),this.parentTemplate.appendChild(this.optionsTemplate)},createParentElement:function(){this.parentTemplate=this.createElement("div",{class:"selector-element","data-reference":"","data-type":"",id:""})},createSelectedElement:function(){this.selectedTemplate=this.createElement("div",{class:"selector-selected"}),this.selectedTemplate.appendChild(this.createElement("p",{class:"selected-text"}))},createGroupElement:function(){this.groupTemplate=this.createElement("div",{class:"selector-group","data-group":""}),this.groupTemplate.appendChild(this.createElement("span",{class:"group-text"}))},createOptionsElement:function(){this.optionsTemplate=this.createElement("div",{class:"selector-options"})},createOptionElement:function(){this.optionTemplate=this.createElement("div",{class:"selector-option show","data-item":""}),this.optionTemplate.appendChild(this.createElement("span",{class:"option-text"}))},createFilterElement:function(){this.filterTemplate=this.createElement("div",{class:"selector-filter"}),this.filterTemplate.appendChild(this.createElement("input",{class:"selector-filter-input",type:"search","data-placeholder":"SELECTOR_FILTER_PLACEHOLDER",placeholder:"Filter options"})),this.filterTemplate.appendChild(this.createElement("span",{class:"selector-filter-clear"}))}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(i),a=function(){function e(t){r(this,e),this.Settings=t}return o(e,[{key:"showOptions",value:function(e,t){var n=this.Settings.data,r=s.default.isFilterType(),o=t.matches("[data-disabled]");t.querySelector(".selector-selected").addEventListener("click",function(i){if(o)return!1;if(e.classList.toggle("visible"),i.currentTarget.classList.toggle("visible"),r){var s=t.querySelector("input");s.focus(),s.value="",s.oninput()}e.classList.contains("visible")?n.closed?n.closed():n.onClose&&n.onClose():n.opened?n.opened():n.onOpen&&n.onOpen()})}},{key:"clearFilter",value:function(e,t){e.addEventListener("click",function(){t.value="",t.oninput()})}},{key:"filterOptions",value:function(e,t){var n=e.querySelector("input"),r=t.querySelector(".selector-options");this.clearFilter(e.querySelector("span"),n),this.createIndex(r),n.oninput=function(){var e=n.value.trim().toLowerCase(),t=r.querySelectorAll(".selector-option");JSON.parse(r.dataset.index).forEach(function(n,r){-1!==n[0].indexOf(e)||-1!==n[1].indexOf(e)?t[r].classList.add("show"):t[r].classList.remove("show")})},n.onkeyup=function(e){if(e.keyCode&&13===e.keyCode){var n=t.querySelectorAll(".selector-option.show");if(1!==n.length)return!1;n[0].click()}}}},{key:"createIndex",value:function(e){var t=Array.from(e.querySelectorAll(".selector-option")).map(function(e){return[e.children[0].innerText.toLowerCase(),e.dataset.item.toLowerCase()]});e.dataset.index=JSON.stringify(t)}},{key:"select",value:function(e){var t=e.querySelector(".selector-selected"),n=this.Settings.data,r=document.querySelector('select[name="'+e.dataset.reference+'"]');e.querySelector(".selector-options").addEventListener("click",function(o){var i=o.target,s=".selector-option";if(i.matches(s)||i.parentNode.matches(s)){if(i.matches(s)||(i=i.parentNode),i.dataset.disabled||i.dataset.selected||i.parentNode.matches("[data-disabled]"))return!1;var a=e.querySelector("[data-selected]"),l=i.dataset.item;n.beforeSelect&&n.beforeSelect(e,l),delete a.dataset.selected,i.dataset.selected="",t.dataset.item=l,t.children[0].innerText=i.children[0].innerText,t.click(),r.querySelector("[selected]").removeAttribute("selected"),r.querySelector('[value="'+i.dataset.item+'"]').setAttribute("selected","true"),n.selected?n.selected(e,i.dataset.item):n.onSelect&&n.onSelect(e,i)}})}}],[{key:"closeSelector",value:function(){document.addEventListener("click",function(e){document.querySelectorAll(".selector-element").forEach(function(t){e.target===t||t.contains(e.target)||t.querySelectorAll(".selector-options, .selector-selected").forEach(function(e){return e.classList.remove("visible")})})})}}]),e}();t.default=a},function(e,t,n){"use strict";n(3)},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0,n(8)(r,o),r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,'.selector-element{position:relative;width:320px;height:38px;font-size:.92rem}.selector-element *{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,sans-serif;box-sizing:border-box}.selector-element .selector-selected{width:100%;height:38px;cursor:pointer;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.05);padding:0 28px 0 11px;border:1px solid silver;border-radius:6px;transition:.2s ease-in-out}.selector-element .selector-selected.visible{background:#fbfbfb;border-radius:6px 6px 0 0;transition:none}.selector-element .selector-selected:hover{background:#fbfbfb;box-shadow:0 2px 4px rgba(0,0,0,.1)}.selector-element .selector-selected:after{content:"";position:absolute;right:12px;top:50%;transform:translateY(-50%);border-top:6px solid silver;border-left:6px solid transparent;border-right:6px solid transparent}.selector-element .selector-selected p{display:inline-block;width:100%;height:100%;line-height:36px;margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.selector-element .selector-options{position:absolute;top:100%;left:0;display:none;width:100%;height:auto;max-height:210px;overflow:auto;z-index:99;border:1px solid silver;border-top:0;border-radius:0 0 6px 6px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.1)}.selector-element .selector-options.visible{display:inline-block}.selector-element .selector-options .selector-filter{position:sticky;top:0;width:100%;height:32px;border-bottom:1px solid silver;z-index:2}.selector-element .selector-options .selector-filter input{width:100%;height:100%;outline:none;border:none;background:#fff url('+n(6)+") left 11px center no-repeat;background-size:18px;font-size:.8rem;padding:0 36px}.selector-element .selector-options .selector-filter .selector-filter-clear{position:absolute;right:9px;height:18px;width:18px;top:50%;transform:translateY(-50%);background:url("+n(7)+") 50% no-repeat;background-size:18px;opacity:.7;cursor:pointer}.selector-element .selector-options .selector-filter .selector-filter-clear:hover{opacity:1}.selector-element .selector-options .selector-group{float:left;width:100%;border-bottom:3px solid silver}.selector-element .selector-options .selector-group .group-text{position:sticky;top:0;float:left;width:100%;line-height:32px;text-transform:uppercase;font-size:.75rem;font-weight:600;background:#fbfbfb;color:#6b6b6b;padding:0 11px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;z-index:1}.selector-element .selector-options .selector-group[data-disabled],.selector-element .selector-options .selector-group[data-disabled] .selector-option{opacity:.6;cursor:not-allowed}.selector-element .selector-options .selector-option{display:none;width:100%;height:32px;background:#fff;border-bottom:1px solid #ddd;cursor:pointer;transition:.2s ease-in-out}.selector-element .selector-options .selector-option:hover{background:#f5f5f5}.selector-element .selector-options .selector-option[data-selected]{background:#f2f2f2;font-weight:600}.selector-element .selector-options .selector-option.show{display:inline-block}.selector-element .selector-options .selector-option .option-text{display:inline-block;width:100%;line-height:32px;font-size:.85rem;padding:0 11px}.selector-element .selector-options .selector-option:last-of-type{border-bottom:none}.selector-element .selector-options .selector-option[data-disabled]{opacity:.6;cursor:not-allowed}.selector-element[data-type=find] .group-text,.selector-element[data-type=search] .group-text{top:33px!important}.selector-element[data-disabled]{opacity:.6;cursor:not-allowed}.selector-element[data-disabled]:hover{box-shadow:inherit}.selector-element[data-disabled] .selector-selected{cursor:not-allowed}.selector-element[data-disabled] .selector-selected:hover{background:#fff}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t){e.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='24' height='24' viewBox='0 0 24 24' id='svg2' version='1.1' inkscape:version='0.91 r13725' sodipodi:docname='search.svg'%3E %3Cmetadata id='metadata10'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs8' /%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='764' inkscape:window-height='480' id='namedview6' showgrid='false' inkscape:zoom='9.8333333' inkscape:cx='12' inkscape:cy='12' inkscape:window-x='59' inkscape:window-y='24' inkscape:window-maximized='0' inkscape:current-layer='svg2' /%3E %3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' id='path4' style='fill:%234d4d4d' /%3E %3C/svg%3E\""},function(e,t){e.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='24' height='24' viewBox='0 0 24 24' id='svg2' version='1.1' inkscape:version='0.91 r13725' sodipodi:docname='clear.svg'%3E %3Cmetadata id='metadata10'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs8' /%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='764' inkscape:window-height='480' id='namedview6' showgrid='false' inkscape:zoom='9.8333333' inkscape:cx='12' inkscape:cy='12' inkscape:window-x='59' inkscape:window-y='24' inkscape:window-maximized='0' inkscape:current-layer='svg2' /%3E %3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' id='path4' style='fill:%234d4d4d' /%3E %3C/svg%3E\""},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(d(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a=i[1],l=i[2],c=i[3],d={css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=b++;n=g||(g=a(t)),r=u.bind(null,n,c,!1),o=u.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=f.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=p.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,b=0,y=[],w=n(9);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],l=h[a.id];l.refs--,i.push(l)}e&&r(o(e,t),t);for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(11),a=r(s),l=n(12),c=r(l);e.exports=function(){function e(t){o(this,e),this.Settings=new a.default(t),c.default.constructor(this.Settings)}return i(e,[{key:"destroy",value:function(){c.default.destroy()}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){var n=this;r(this,e),this.data={selector:null,callback:null,onOpen:null,onClose:null,onSelect:null,destroy:null,element:null,created:null,opened:null,closed:null,selected:null,beforeCreate:null,beforeSelect:null,beforeDestroy:null,destroyed:null,label:null,type:null},Object.keys(t).forEach(function(e){n.data[e]=t[e]})}return o(e,[{key:"set",value:function(e,t){this.data[e]=t}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),s=n(1),a=r(s);t.default={constructor:function(e){this.Settings=e,this.prepareElements(),this.render()},prepareElements:function(){var e=this.Settings.data.element;if("string"==typeof e){if(e=document.querySelectorAll(e),0===e.length)throw new DOMException;this.Settings.set("element",e)}},render:function(){var e=this;this.Settings.data.element.forEach(function(t){if(!e.checkElement(t))return!1;i.default.constructor(t,e.Settings)}),a.default.closeSelector()},checkElement:function(e){return!!e.nodeType&&"SELECT"===e.tagName},destroy:function(){var e=this.Settings.data;e.beforeDestroy&&e.beforeDestroy(),e.element.forEach(function(e){var t=e.parentNode;t.removeChild(t.querySelector('[data-reference="'+e.name+'"]')),e.style.display=""}),e.destroyed&&e.destroyed()}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),a=r(s),l=n(1),c=r(l),d=function(){function e(t,n){o(this,e),this.Settings=n,this.Events=new c.default(n),this._element=t,this.hideOrigin(),this._render=null}return i(e,[{key:"hideOrigin",value:function(){this._element.style.display="none"}},{key:"renderParent",value:function(){var e=a.default.parentTemplate.cloneNode(!0);e.id=this._element.id,e.dataset.reference=this._element.name,e.dataset.type=this.Settings.type||this._element.dataset.type||"default",this._element.disabled&&(e.dataset.disabled=!0),this._render=e}},{key:"renderContent",value:function(){var e=this,t=void 0,n=this._render.querySelector(".selector-options");if(this.Events.showOptions(n,this._render),a.default.isFilterType()){var r=this.renderSearch();n.appendChild(r),this.Events.filterOptions(r,this._render)}Array.from(this._element.children).forEach(function(r){var o=r.tagName;if("OPTGROUP"===o)t=e.renderGroup(r);else{if("OPTION"!==o)return!0;t=e.renderOption(r)}n.appendChild(t)}),a.default.isFilterType()&&this.Events.createIndex(n),this.Events.select(this._render)}},{key:"renderSearch",value:function(){return void 0===a.default.filterTemplate&&a.default.createFilterElement(),a.default.filterTemplate.cloneNode(!0)}},{key:"renderGroup",value:function(e){var t=this,n=a.default.groupTemplate.cloneNode(!0);return n.dataset.group=n.children[0].innerText=e.label,e.disabled&&(n.dataset.disabled=!0),Array.from(e.children).forEach(function(e){n.appendChild(t.renderOption(e))}),n}},{key:"renderOption",value:function(e){var t=a.default.optionTemplate.cloneNode(!0);return Object.keys(e.dataset).forEach(function(n){t.dataset[n]=e.dataset[n]}),t.dataset.item=e.value,t.children[0].innerText=e.innerText,e.disabled&&(t.dataset.disabled=!0),e.selected&&(t.dataset.selected=!0),t}},{key:"renderSelected",value:function(){var e=this._render.querySelector(".selector-selected"),t=this._element.querySelector("[selected]");t?(e.dataset.item=t.value,e.children[0].innerText=t.innerText):(e.dataset.item=null,e.children[0].innerText="---"),this._element.dataset.label?e.children[0].innerText=this._element.dataset.label:this.Settings.label&&(e.children[0].innerText=this.Settings.label)}},{key:"show",value:function(){var e=this.Settings.data;e.beforeCreate&&e.beforeCreate(),this._element.parentNode.insertBefore(this._render,this._element.nextSibling),e.created?e.created():e.callback&&e.callback()}}]),e}();t.default=d},function(e,t,n){"use strict";n(2),e.exports=n(10)}])});