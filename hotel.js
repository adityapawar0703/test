function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"*/
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();


}
locomotive();

var nav = document.querySelector("#nav")
var page1img = document.querySelector("#page1 img")


var tl1 = gsap.timeline();
tl1.to("#page1 img", {

  delay: 1.3,
  scale: 2.0,

})
tl1.from("#nav", {

  delay: 0,
  transition: "cubic-bezier(0.19, 1, 0.22, 1)",
  y: -100,
  stagger: 1,
  opacity: 1,

})
var tl2 = gsap.timeline();
tl2.from("#heading", {
  delay: 0.8,
  opacity: 0,
  duration: 1,
  y: -50,
  transition: "cubic-bezier(0.19, 1, 0.22, 1)",

})


//working on page 2

function splitting() {
  var p2text = document.querySelector("#page2 h1").textContent
  var splited = p2text.split("")

  var clutter = ""
  splited.forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#page2 h1").innerHTML = clutter

}
splitting();




// var tl3 = gsap.timeline()
// tl3.to("#page2 h2 span", {
//   color: "white",
//   stagger: 1,

//   scrollTrigger:{
//  trigger:"page2",
//  scroller:"#main",
//  start:"top 40%",
//  end: "top -100%",
//  scrub:2,
//  pin:true,

//   }
// })
gsap.to("h1 span", {
  color: "white",
  stagger: 0.1,


  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 50%",
    end: "top -80%",
    scrub: 2,
    markers: true,

  }

})

Shery.imageEffect("#liquid", {
  style: 1 /*OR 5 for different variant */,
  debug: true,
  config: { "a": { "value": 1.6, "range": [0, 30] }, "b": { "value": 0.95, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.506582562779251 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
});

function splitext() {
  var p2text = document.querySelector("#page3 h1").textContent
  var splited = p2text.split("")

  var clutter = ""
  splited.forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#page3 h1").innerHTML = clutter

}
splitext();
gsap.to("#page3 h1 span", {
  color: "#434B34",
  stagger: 0.1,


  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 50%",
    end: "top -50%",
    scrub: 2,
    markers: true,

  }

})

var room = document.querySelectorAll(".room")
room.forEach(function (val) {
 
 
  val.addEventListener("mouseenter", function () {
    // val.childNodes[1].style.width = "30%";
    val.style.backgroundColor = "#5B6647"
    val.style.color = "white"
    val.childNodes[5].style.backgroundColor = "white"
    val.childNodes[5].style.color = "black";
// trial page5 images
    var textpg5 = (val.getAttribute("id"))
    console.log(textpg5)
    gsap.to(`#${textpg5} img`, {
      x: 0,
      duration: 1,
      width: 300,
    })

  })

  val.addEventListener("mouseleave", function () {
    // val.childNodes[1].style.width = "0%";
    val.style.backgroundColor = "white"
    val.childNodes[5].style.backgroundColor = "#5B6647"
    val.style.color = "black";
// trial page5 images
    var textpg5 = (val.getAttribute("id"))
    console.log(textpg5)
    gsap.to(`#${textpg5} img`, {
      x: -100,
      duration: 1,
      width: 0,
    })

  })

})


// writing swipper js
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});