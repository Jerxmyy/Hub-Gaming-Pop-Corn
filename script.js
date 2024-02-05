document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".font-batman");
  const moon = document.querySelector(".moon img");
  const blackOverlay = document.querySelector(".black-overlay");
  const galleryWrapper = document.querySelector(".gallery-wrapper");
  const gallery = document.querySelector(".gallery");

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  const smoother = ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 1,
    normalizeScroll: true,
    ignoreMobileResize: true,
    effects: true,
    preventDefault: true,
  });

  gsap.to(title, {
    scrollTrigger: {
      trigger: "body",
      start: "0%",
      end: "150%",
      scrub: 0.5,
    },
    fontSize: "0rem",
    opacity: 0,
  });

  gsap.to(moon, {
    scrollTrigger: {
      trigger: "body",
      start: "0%",
      end: "50%",
      scrub: 5,
    },
    scale: 5,
  });

  //   smoother.effects(moon, { scale: 5, lag: 0.1 });

  gsap.to(blackOverlay, {
    scrollTrigger: {
      trigger: "body",
      start: "30%",
      end: "50%",
      scrub: 0.5,
      onComplete: function () {
        // Fade in the gallery
        gsap.to(".gallery", {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.5,
        });

        // Start the gallery animation after the black overlay animation completes
        tlGallery.play();
      },
    },
    opacity: 1,
    backgroundColor: "black",
  });

  gsap.to(".all", {
    scrollTrigger: {
      trigger: ".all",
      start: "100%",
      end: "+=400%",
      scrub: 0.5,
    },
  });

  gsap.to("#content", {
    scrollTrigger: {
      trigger: "body",
      start: "30%",
      end: "100%",
      scrub: true,
      markers: true,
    },
    opacity: 1,
  });

  let tlGallery = gsap.timeline({ paused: true });
  tlGallery.to(gallery, {
    x: `-${gallery.offsetWidth + window.innerWidth}`,
    scrollTrigger: {
      trigger: galleryWrapper,
      start: "top top",
      end: `+=${gallery.offsetWidth + window.innerWidth}`,
      pin: true,
      scrub: 0.5,
    },
  });

  let tl = gsap.timeline();
  let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
  let chars = mySplitText.chars;

  chars.forEach((char, i) => {
    smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
  });
});

// SLIDER SCROLL

gsap.registerPlugin(ScrollTrigger);

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
