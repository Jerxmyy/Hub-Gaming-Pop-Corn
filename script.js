const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM",
    trigger: "#header-zoom",
    scrub: 0.5,
    start: "top top",
    end: "+=100% 50px",
    pin: true,
  },
});

timelineHeader
  .to(
    ".image-2",
    {
      scale: 3,
    },
    "sameTime"
  )
  .to(
    "#header-zoom",
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

updateScrollTrigger();
