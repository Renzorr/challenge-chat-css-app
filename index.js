const tl = gsap.timeline();

tl.to(".loader", {
  height: 0,
  top: "100%",
  duration: 1.1,
  delay: 0.8,
  ease: Power2.easeInOut,
});

tl.from(".phone", {
  y: -200,
  opacity: 0,
});

tl.from(".phone_header", {
  y: -50,
  opacity: 0,
});

tl.from(".hide", {
  y: -200,
  stagger: 0.2,
});

tl.from(".item", {
  scale: 0,
  opacity: 0,
  stagger: 0.1,
});
