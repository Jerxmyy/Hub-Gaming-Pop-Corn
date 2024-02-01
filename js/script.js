document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".title");
    const moon = document.querySelector(".moon img");
    const blackOverlay = document.querySelector(".black-overlay");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(title, {
        scrollTrigger: {
            trigger: ".all",
            start: "0%",
            end: "35%",
            scrub: 0.5,
            markers: true,
        },
        fontSize: "2rem",
        opacity: 0,
    });

    gsap.to(moon, {
        scrollTrigger: {
            trigger: ".all",
            start: "-5%",
            end: "50%",
            scrub: 2,
            markers: true,
        },
        scale: 5,
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "20%",
            end: "50%",
            scrub: 0.5,
            markers: true,
        },
        opacity: 1,
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "50%",
            end: "65%",
            scrub: 0.5,
            markers: true,
        },
        backgroundColor: "red",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "65%",
            end: "80%",
            scrub: 0.5,
            markers: true,
        },
        backgroundColor: "blue",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "80%",
            end: "95%",
            scrub: 0.5,
            markers: true,
        },
        backgroundColor: "green",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "95%",
            end: "110%",
            scrub: 0.5,
            markers: true,
        },
        backgroundColor: "yellow",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "110%",
            end: "125%",
            scrub: 0.5,
            markers: true,
        },
        backgroundColor: "purple",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "125%",
            end: "140%",
            scrub: 0.5,
            markers: true,
        },
        backgroundColor: "pink",
    });

    gsap.to(".all", {
        scrollTrigger: {
            trigger: ".all",
            start: "100%",
            end: "+=300%",
            scrub: 0.5,
            markers: true,
        },
    });
});