!function(r){var e={};function o(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=e,o.d=function(r,e,t){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(t,n,function(e){return r[e]}.bind(null,n));return t},o.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(e,"a",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p="",o(o.s=0)}([function(r,e,o){"use strict";o.r(e);var t={name:"dark",text:"#E6E4EB",bg:"#2D2D2D",previewColor:"#F3F2F5",input:{background:"#373737",color:"#F3F2F5",border:"#454545",borderActive:"#1384FF"},button:{color:"#F3F2F5",bgColor:"rgba(255,255,255,0.25)",border:"#636363",bgActive:"rgba(255,255,255,0.10)"},secondaryButton:{borderColor:"#636363",textColor:"#F3F2F5"},CTAButton:{bgColor:"#1384FF",textColor:"#fff",bgActive:"#0F72DB"},radio:{selectedColor:"#1384FF",border:"#1384FF"}},n={name:"light",text:"#747474",bg:"#F7F7F7",previewColor:"#242424",input:{background:"#FBFBFB",color:"#505050",border:"#E4E4E4",borderActive:"#1384FF"},button:{color:"#505050",bgColor:"#FBFBFB",border:"#E4E4E4",bgActive:"#F3F2F5"},secondaryButton:{borderColor:"#B2AEBD",textColor:"#817B8F"},CTAButton:{bgColor:"#1384FF",textColor:"#fff",bgActive:"#0F72DB"},radio:{selectedColor:"#969696",border:"#969696"}};e.default=function(r){return"dark"===r?t:n}}]);