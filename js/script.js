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
            scrub: 0.5,
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

});