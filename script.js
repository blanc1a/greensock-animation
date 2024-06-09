let tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
//we want every item to fade in smoothly and in order to give each item the same opacity, we can use a timeline-default
//timeline defaults are objects where we can say that every tween in this timeline is going to have a shared or default property => reduces the amount of code
//ease: "back" is gonna give the items a little bit of a bounce
tl.from("#demo", { ease: "linear" })
  .from("h1", { x: 80 })
  .from("h2", { x: -80 }, "<") //adding a "time-stamp" after is called a Tweak => "<" means that h2 will start at the same time as h1
  .from("p", { y: 30 }, "-=0.2") //starts 0.2 seconds sooner
  .from("button", { y: 50 }, "-=0.4") //
  .from("#items > g", {
    //selects all g's inside the #items container
    transformOrigin: "50% 50%", //means the transformation will be applied from the center of my application
    scale: 0, //from 0 to default size
    opacity: 0, //from 0 to default
    stagger: 0.1, //each g follows after the other
  });
