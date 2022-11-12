// Jabal Team Intro Animatin START 

gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
gsap.timeline({scrollTrigger:{trigger:'.introAnimationStarter', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)
    
// Jabal Team Intro Animatin END

//ending intro animation START

gsap.to(".main",{opacity:0,scrollTrigger:{trigger:'.introAnimationEnder',start:'-45% center',end:'bottom bottom',markers:true,scrub:1}})
gsap.to(".main",{position:"relative",scrollTrigger:{trigger:'.introAnimationEnder',start:'-5% center',end:'bottom bottom',markers:true,scrub:1}})

//END

// gsap.to(".jabalTeamText" ,{
//     scrollTrigger : {
//         trigger :'.introAnimationEnder',
//         start:'-60% center',
//         end:'20% bottom',
//         markers:true,
//         toggleClass: {targets: ".jabalTeamText", className: "jabalMove"},
//         scrub:1
//     },
//     ease:Power2.easeOuteaseOut,

// })

// //hide intro elements
// gsap.to("#mask" ,{
//     scrollTrigger : {
//         trigger :'.airplane_section',
//         start:'-150% top',
//         end:'bottom bottom',
//         markers:true,
//         toggleClass: {targets: "#mask", className: "hide"},
       
//     },
//     ease:Power2.easeOuteaseOut,

// })
// gsap.to(".main" ,{
//     scrollTrigger : {
//         trigger :'.airplane_section',
//         start:'-150% top',
//         end:'bottom bottom',
//         markers:true,
//         toggleClass: {targets: ".main", className: "hide"},
      
//     },
//     ease:Power2.easeOuteaseOut,

// })

//////////////////////

// Floating animation START
var tt=".can";
const floatAnimation = (target) => {
    const floatingElement = "" +target+" > img "+"";
    const tlCan = new TimelineMax({repeat:-1});
    /*Can Animation*/
   tlCan
       //move top left
   .to(floatingElement, 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
   
       //move down right
   .to(floatingElement, 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
   
   
   .to(floatingElement, 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
   
   .to(floatingElement, 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   
   
   .to(floatingElement, 3, { y:'-=50', ease:Power1.easeInOut})
      
   .to(floatingElement, 3, { y:'+=50', ease:Power1.easeInOut})
   
   
   .to(floatingElement, 3, { y:'-=30', ease:Power1.easeInOut})
      
   .to(floatingElement, 3, { y:'+=30', ease:Power1.easeInOut})
   
   
   .to(floatingElement, 2, { y:'-=30', ease:Power1.easeInOut})
      
   .to(floatingElement, 2, { y:'+=30', ease:Power1.easeInOut})

 TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

}
// floatAnimation(tt);

//NEW Floating Animation
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

// Floating animation END

