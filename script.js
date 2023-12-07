function scrollbar(){
  gsap.registerPlugin(ScrollTrigger);
 

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



let images = gsap.utils.toArray('.z-out')

images.forEach((item, index) => {

 let exptl = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     start: "top 85%",
     end: "top 5%",
     scrub: 2,
     markers: true,
     scroller: '#main'
   }
 });
 exptl.from(item, {
   x: 100,
   opacity: 0,
   duration: 1
 });
 
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
scrollbar();


var tl = gsap.timeline();

tl.to("#page1-top h1",{
  y:70,
  opacity:1,
 
})

tl.to("#page1 .page-bottom-right  h4",{
  opacity:1,
  duration:1,
})

tl.to("#page1 .page-bottom-right .main-heading h1",{
    opacity:1,
    duration:1,
    stagger:1
})

tl.to("#page1 .page-bottom-right h2",{
  opacity:1,
  duration:1,
  y: 0,
})

tl.to("#page1 .page-bottom-right p",{
  opacity:1,
  duration:1,
  x: 0,
})
tl.to("#page1 .page-bottom-right p",{
  opacity:1,
  duration:2,
  x: 0,
  
})
