let tl = gsap.timeline();
tl.from("#demo", { opacity: 0 })
  .from("h1", { x: 80, opacity: 0 })
  .from("h2", { x: -80, opacity: 0 })
  .from("p", { y: 30, opacity: 0 })
  .from("button", { y: 50, opacity: 0 })
  .from("#items > g", {
    transformOrigin: "50% 50%",
    scale: 0,
    opacity: 0,
    stagger: 0.1,
  });
