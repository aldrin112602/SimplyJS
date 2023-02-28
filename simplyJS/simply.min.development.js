/** 
 * 
 * @license SimplyJS v1.0.1
 * simply.min.development.js
 *
 * Copyright (c) Aldrin Caballero | Feb. 28, 2023
 * https://github.com/aldrin112602/SimplyJS
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

/**
 * @license SimplyJS v1.0.1
 * simply.min.development.js
 * (c) Aldrin Caballero | Feb. 28, 2023
 * https://github.com/example/simply-js
 * License: MIT
 */
const Simply=(()=>{const findScript=()=>document.querySelectorAll('script[type="text/simply"]');if(findScript().length>0){const src=[...findScript()].map((e=>e.hasAttribute("src")?{hasSrc:!0,content:null,src:e.src}:{hasSrc:!1,content:e.innerHTML,src:null})),getContents=e=>new Promise(((t,n)=>{const r=new XMLHttpRequest;r.onload=e=>{t(r.responseText)},r.onerror=e=>{n(r.response)},r.open("GET",e),r.send(null)}));Promise.all(src.map((e=>e.hasSrc?getContents(e.src):e.content))).then((content=>{try{eval(jsxToJs(content))}catch(e){console.error(e),console.trace()}}))}function jsxToJs(e){let t=e.join("\n\n").replace(/<(\w+)/g,'createElement("$1", { ').replace(/(\w+)="(.*?)"/g,'$1: "$2", ').replace(/(\w+)='(.*?)'/g,'$1: "$2", ').replace(/(\w+)=\{(.*?)\}/g,"$1: $2, ").replace(/,(\s+|)>/g," }, ").replace(/{ >/g,"null,").replace(/className:/g,"className: ").replace(/onClick:/g,"onClick: ").replace(/<\/\w+>/g,"),").replace(/(\w+)>/g,"").replace(/(\w+)>(.*?)</g,'$1: "$2", ').replace(/>\s+</g,",").replace(/;\s*,/g,",").replace(/­/g,"").replace(/,\s*\)/g,")"),n=t.match(/},\s(.+?)\)/g),r=n;return n.map((e=>e.match(/},\s(.+?)\)/)[1].trim())).map(((e,t)=>r[t].replace(e,`'${e}'`))).forEach(((e,n)=>{t=t.replace(r[n],e)})),t}const fromCamelCase=e=>e.replace(/([A-Z])/g," $1").split(" ").join("-").toLowerCase(),createElement=(e,t,...n)=>{const r=document.createElement(e);return Object.keys(t||{}).forEach((e=>{e.startsWith("on")&&"function"==typeof t[e]?r.addEventListener(e.slice(2).toLowerCase(),t[e]):"className"===e?r.className=t[e]:r.setAttribute(fromCamelCase(e),t[e])})),n.forEach((e=>{"string"==typeof e?r.appendChild(document.createTextNode(e)):r.appendChild(e)})),r},render=(e,t,n)=>{if(n&&"function"==typeof n&&n(),"string"==typeof t&&(t=document.querySelector(t)),"function"==typeof e){const n=e();t&&t.appendChild(n)}else"object"==typeof e&&e instanceof Element&&t&&t.appendChild(e)};return{render:render}})();