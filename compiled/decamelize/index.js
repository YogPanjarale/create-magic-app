module.exports=(()=>{"use strict";var e={159:e=>{const r=(e,r)=>{e=e.replace(/((?<![\p{Uppercase_Letter}\d])[\p{Uppercase_Letter}\d](?![\p{Uppercase_Letter}\d]))/gu,e=>{return e.toLowerCase()});return e.replace(/(\p{Uppercase_Letter}+)(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu,(e,t,p)=>{return t+r+p.toLowerCase()})};e.exports=((e,{separator:t="_",preserveConsecutiveUppercase:p=false}={})=>{if(!(typeof e==="string"&&typeof t==="string")){throw new TypeError("The `text` and `separator` arguments should be of type `string`")}if(e.length<2){return p?e:e.toLowerCase()}const a=`$1${t}$2`;const s=e.replace(/([\p{Lowercase_Letter}\d])(\p{Uppercase_Letter})/gu,a);if(p){return r(s,t)}return s.replace(/(\p{Uppercase_Letter}+)(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu,a).toLowerCase()})}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var p=r[t]={exports:{}};var a=true;try{e[t](p,p.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return p.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(159)})();