
//#region JABAL TEAM ANIMATION

gsap.set('.main', {position:'fixed', background:'#fff',  maxWidth:'1200px', top:0, left:'50%', x:'-50%'})
gsap.timeline({scrollTrigger:{trigger:'.introAnimationStarter', start:'top top',
               end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)
    
//#endregion


//#region ending intro animation 

gsap.to(".main",{width:0 , height:0,opacity:0,scrollTrigger:{trigger:'.introAnimationEnder',start:'-45% center',end:'bottom bottom',scrub:1}})
// gsap.to(".main",{toggleClass: '.hide',scrollTrigger:{trigger:'.introAnimationEnder',start:'-5% center',end:'bottom bottom',scrub:1}})

//#endregion



//#region Random Floating Animation

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const cans = gsap.utils.toArray('.can > img');
cans.forEach(can => {
  gsap.set(can, {
    x: randomX(-1),
    y: randomY(1),
    rotation: randomAngle(-1)
  });

  moveX(can, 1);
  moveY(can, -1);
  rotate(can, 1);
});

function rotate(target, direction) {
  
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

//#endregion

//#region Section Wrapper Animation 

gsap.set(".section_no1" ,{scale:0.1,left:'50%', x:'-50%',position:'relative'})
gsap.to(".section_no1",{
  y:-450,
  scale:1,

      
  ease: "power2.in",
  scrollTrigger:{
    trigger:'.jabalText_trigger',
    start:'bottom center',
    
    markers:true,
    scrub:1,
  
    }})

    

 


//#endregion

//#region jabalText_trigger 
gsap.set(".jabalText_trigger",{position : 'absolute' , right : 0 , bottom : "-65vh" ,width:'30px' , height : '250px' ,backgroundColor: '#00ff3e'})
var ss = ScrollTrigger.create({
  trigger: ".jabalText_trigger",
  start: "top top",
  
  end: "bottom bottom",
  onToggle: self => console.log("toggled, isActive:", self.isActive),
  onUpdate: self => {
    console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  }
});
//#endregion





gsap
  .timeline({
    scrollTrigger: {
      trigger: ".trigger",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=150%"
    }
  })
  .to(".box", {
    force3D: true, 
    duration: 1,
    xPercent: 100,
    ease: "power1.inOut",
    stagger: { amount: 1 }
  })
  .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
  .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);
