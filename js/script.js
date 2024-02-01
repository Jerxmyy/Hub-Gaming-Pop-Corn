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
        },
        scale: 5,
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "20%",
            end: "50%",
            scrub: 0.5,
        },
        opacity: 1,
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "50%",
            end: "65%",
            scrub: 0.5,
        },
        backgroundColor: "red",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "65%",
            end: "80%",
            scrub: 0.5,
        },
        backgroundColor: "blue",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "80%",
            end: "95%",
            scrub: 0.5,
        },
        backgroundColor: "green",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "95%",
            end: "110%",
            scrub: 0.5,
        },
        backgroundColor: "yellow",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "110%",
            end: "125%",
            scrub: 0.5,
        },
        backgroundColor: "purple",
    });

    gsap.to(blackOverlay, {
        scrollTrigger: {
            trigger: ".all",
            start: "125%",
            end: "140%",
            scrub: 0.5,
        },
        backgroundColor: "pink",
    });

    gsap.to(".all", {
        scrollTrigger: {
            trigger: ".all",
            start: "bottom bottom",
            end: "+=200%",
            scrub: 0.5,
            markers: true,
        },
        height: "300vh",
    });

});