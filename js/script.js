document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".font-batman");
    const moon = document.querySelector(".moon img");
    const blackOverlay = document.querySelector(".black-overlay");
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const gallery = document.querySelector('.gallery');

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 1,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        preventDefault: true,
        markers: true,
    });

    gsap.to(title, {
        scrollTrigger: {
            trigger: ".all",
            start: "0%",
            end: "200%",
            scrub: 0.5,
        },
        fontSize: "2rem",
        opacity: 0,
    });

    gsap.to(moon, {
        scrollTrigger: {
            trigger: ".all",
            start: "0%",
            end: "50%",
            scrub: 0.01,
        },
        scale: 5,
    });

    gsap.to("#content", {
        scrollTrigger: {
            trigger: "#content",
            start: "20%", // Ajustez cette valeur en fonction de votre préférence
            end: "150%",
            scrub: true,
        },
        opacity: 1,
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "10%",
            end: "70%",
            scrub: 0.5,
            onComplete: function () {
                // Fade in the gallery
                gsap.to(".gallery", { opacity: 1, duration: 1, ease: "power2.inOut", delay: 0.5 });

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
            end: "+=350%",
            scrub: 0.5,
        },
    });

    let tlGallery = gsap.timeline({ paused: true });
    tlGallery.to(gallery, {
        x: `-${gallery.offsetWidth + window.innerWidth}`,
        scrollTrigger: {
            trigger: galleryWrapper,
            start: 'top top',
            end: `+=${gallery.offsetWidth + window.innerWidth}`,
            pin: true,
            scrub: 0.5,
            markers: true,
        }
    });

    let tl = gsap.timeline();
    let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
    let chars = mySplitText.chars;

    chars.forEach((char, i) => {
        smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
    });
});
