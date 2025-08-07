gsap.registerPlugin(ScrollTrigger);

// Page load entrance
window.addEventListener("load", () => {
  gsap.from("#intro img", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from("#intro h2", {
    y: 20,
    opacity: 0,
    delay: 0.4,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from("#intro p", {
    y: 20,
    opacity: 0,
    delay: 0.6,
    duration: 1,
    ease: "power2.out"
  });
});

// Scroll-triggered reveal for each section
document.querySelectorAll(".reveal").forEach(elem => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});


