const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM",
    trigger: ".first_title",
    scrub: 0.5,
    start: "top top",
    end: "+=100% 50px",
    pin: true,
  },
});

const fadeOutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#moon-zoom",
    scrub: 0.5,
    start: "top top",
    end: "+=100% 50px",
  },
});

timelineHeader
  .to(
    ".moon",
    {
      scale: 3,
    },
    "sameTime"
  )

  .to(
    ".fixed-background",
    {
      opacity: 0,
      duration: 0.1,
    },
    "-=0.1"
  )

  .to(
    "#moon-zoom",
    {
      opacity: 0,
      duration: 0.1,
    },
    "-=0.1"
  )

  .to(
    "#slider",
    {
      opacity: 1,
      duration: 0.1,
    },
    "-=0.1"
  )
  .call(() => document.body.classList.add("black-bg"));

fadeOutTimeline.to(
  "#overlay",
  {
    opacity: 1,
    duration: 1,
  },
  "sameTime"
);

// SLIDER

let container = document.querySelector(".universe");
let scrollbar = document.querySelector(".scrollbar");
let cursor = document.querySelector(".cursor");

scrollbar.style.width = "30rem";

let updateScrollTrigger = () => {
  ScrollTrigger.update();
  hscroll.scrollTrigger.end =
    container.scrollWidth -
    document.documentElement.clientWidth +
    container.offsetWidth;
};

let hscroll = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: container,
    end: () =>
      container.scrollWidth -
      document.documentElement.clientWidth +
      container.offsetWidth,
    onUpdate: (self) => {
      let progress = self.progress * 100;
      cursor.style.left = `${progress}%`;
    },
  },
  invalidateOnRefresh: true,
  defaults: { ease: "none", duration: 1 },
});

hscroll.from(".universe", { x: 300 }).to(
  ".games",
  {
    x: () => -(container.scrollWidth - document.documentElement.clientWidth),
  },
  0
);

// scrollbar appears on scroll
let opacityTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".universe",
    start: "top 50%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
});

opacityTimeline.to(".scrollbar", {
  opacity: 1,
  duration: 0.5,
});

updateScrollTrigger();
