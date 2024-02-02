document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".font-batman");
    const moon = document.querySelector(".moon img");
    const blackOverlay = document.querySelector(".black-overlay");

    gsap.registerPlugin(ScrollTrigger);

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
        rotate: 200,
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "0%",
            end: "70%",
            scrub: 0.5,
        },
        opacity: 1,
        backgroundColor: "black",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "50%",
            end: "100%",
            scrub: 0.5,
        },
        backgroundColor: "red",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "100%",
            end: "150%",
            scrub: 0.5,
        },
        backgroundColor: "blue",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "150%",
            end: "200%",
            scrub: 0.5,
        },
        backgroundColor: "green",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "200%",
            end: "250%",
            scrub: 0.5,
        },
        backgroundColor: "yellow",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "250%",
            end: "300%",
            scrub: 0.5,
        },
        backgroundColor: "pink",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "300%",
            end: "350%",
            scrub: 0.5,
        },
        backgroundColor: "purple",
    });

    gsap.to(".all", {
        scrollTrigger: {
            trigger: ".all",
            start: "100%",
            end: "350%",
            scrub: 0.5,
        },
    });
});