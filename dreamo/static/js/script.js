class BeforeAfter{constructor(t){const e=document.querySelector(t.id),s=e.querySelector(".bal-before"),o=(e.querySelector(".bal-beforePosition"),e.querySelector(".bal-afterPosition")),i=e.querySelector(".bal-handle");e.querySelector(".bal-before-inset").setAttribute("style","width: "+e.offsetWidth+"px;"),window.onresize=function(){e.querySelector(".bal-before-inset").setAttribute("style","width: "+e.offsetWidth+"px;")},s.setAttribute("style","width: 50%;"),i.setAttribute("style","left: 50%;"),e.addEventListener("touchstart",()=>{e.addEventListener("touchmove",t=>{let r=e.offsetWidth,f=t.changedTouches[0].clientX-e.offsetLeft;if(f>10&&f<e.offsetWidth-10){let t=100*f/r;s.setAttribute("style","width:"+t+"%;"),o.setAttribute("style","z-index: 1;"),i.setAttribute("style","left:"+t+"%;")}})}),e.addEventListener("mousemove",t=>{let r=e.offsetWidth,f=100*t.offsetX/r;t.offsetX>10&&t.offsetX<e.offsetWidth-10&&(s.setAttribute("style","width:"+f+"%;"),o.setAttribute("style","z-index:1;"),i.setAttribute("style","left:"+f+"%;"))})}}