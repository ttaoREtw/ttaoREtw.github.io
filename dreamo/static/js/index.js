window.HELP_IMPROVE_VIDEOJS=!1,$(document).ready(function(){$(".navbar-burger").click(function(){$(".navbar-burger").toggleClass("is-active"),$(".navbar-menu").toggleClass("is-active")});for(var o={slidesToScroll:1,slidesToShow:4,loop:!0,infinite:!0,autoplay:!1,autoplaySpeed:3e3},e=bulmaCarousel.attach(".carousel",o),a=0;a<e.length;a++)e[a].on("before:show",o=>{console.log(o)});var l=document.querySelector("#my-element");l&&l.bulmaCarousel&&l.bulmaCarousel.on("before-show",function(o){console.log(o)})});