(window.webpackJsonp_accordion_block=window.webpackJsonp_accordion_block||[]).push([[1],{4:function(e,t,n){}}]),function(e){function t(t){for(var o,l,i=t[0],a=t[1],s=t[2],p=0,d=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={0:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp_accordion_block=window.webpackJsonp_accordion_block||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=a;c.push([5,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(4),n(0)),c=n(2),l=n(1);const{Dashicon:i}=wp.components;Object(o.registerBlockType)("aspire-accordion/accordion-block",{attributes:{title:{type:"string"}},edit:function(e){const t=Object(l.useBlockProps)();return console.log(t),Object(r.createElement)("div",t,Object(r.createElement)("div",{className:"accordion-summary"},Object(r.createElement)("span",{class:"dashicons dashicons-arrow-down"}),Object(r.createElement)(l.RichText,{placeholder:Object(c.__)("Accordion title"),onChange:t=>{e.setAttributes({title:t})},value:e.attributes.title,className:"summary-text"})),Object(r.createElement)("div",{className:"accordion-details"},Object(r.createElement)(l.InnerBlocks,null)))},save:function(e){return Object(r.createElement)("div",l.useBlockProps.save(),Object(r.createElement)("details",null,Object(r.createElement)("summary",{role:"button"},e.attributes.title),Object(r.createElement)("div",null,Object(r.createElement)(l.InnerBlocks.Content,null))))}})}]);