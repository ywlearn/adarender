!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("echarts")):"function"==typeof define&&define.amd?define(["echarts"],t):"object"==typeof exports?exports.adarender=t(require("echarts")):e.adarender=t(e.echarts)}(window,function(r){return i={},o.m=n=[function(e,t){e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){var r=t._adarender;if(r&&r.ecele&&r.ecobj)for(var n=0;n<e.length;++n){var o=r.ecele.offsetWidth,i=r.ecele.offsetHeight;r.oldw==o&&r.oldh==i||(r.oldw=o,r.oldh=i,r.ecobj.resize({width:o,height:i}))}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.oldw=0,this.oldh=0,this.ecobj=void 0,this.ecele=void 0,this.observer=void 0}return function(e,t,r){t&&i(e.prototype,t),r&&i(e,r)}(e,[{key:"setEChartResize",value:function(e,t){var r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;this.ecobj=e,this.ecele=t,this.oldw=0,this.oldh=0,this.observer=new r(u),(this.observer._adarender=this).observer.observe(t,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0})}}]),e}();function f(e,t){var r=o.a.init(e);return r._adarender=new a,r.setOption(t),r.resize({width:e.offsetWidth,height:e.offsetHeight}),r}r.d(t,"initChart",function(){return f}),r.d(t,"AdaRender",function(){return a})}],o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1);function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,i});