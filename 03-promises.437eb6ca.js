function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form");l.addEventListener("submit",(function(n){n.preventDefault(),function(){for(const e in u)u[e]=Number(l[e].value)}(),function(){let n=u.delay;for(let o=1;o<=u.amount;o+=1)s(o,n).then((({position:n,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)})).catch((({position:n,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`)})),n+=u.step}()}));const u={delay:0,step:0,amount:0};function s(e,n){return new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}
//# sourceMappingURL=03-promises.437eb6ca.js.map
