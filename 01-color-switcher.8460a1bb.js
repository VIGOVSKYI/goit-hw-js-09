const t=document.querySelector("button[data-start]");console.log(t);const e=document.querySelector("button[data-stop]");console.log(e);const o=document.querySelector("body");t.addEventListener("click",(function(t){t.target.setAttribute("disabled","inactive"),n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(n)}));let n=null;
//# sourceMappingURL=01-color-switcher.8460a1bb.js.map