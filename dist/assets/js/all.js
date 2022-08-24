let calculateTax=(e,t)=>e*t,calculate=()=>{const e=document.getElementById("input-numbers"),t=document.getElementById("result"),l=e.value.split(",").map((e=>parseInt(e))),n=l.filter((e=>e<0));let a;a=n.length>0?`Negatives not allowed:${n.join(", ")}`:l.filter((e=>e<=1e3)).reduce(((e,t)=>e+t),0),t.textContent=a};
//# sourceMappingURL=all.js.map
