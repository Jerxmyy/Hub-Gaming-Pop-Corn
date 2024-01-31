// Attendez que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez l'élément du titre et de la lune
    const title = document.querySelector(".title");
    const moon = document.querySelector(".moon img");

    // Utilisez GSAP pour créer l'animation
    gsap.registerPlugin(ScrollTrigger);

    // Créez l'animation avec ScrollTrigger pour le titre
    gsap.to(title, {
        scrollTrigger: {
            trigger: ".all", // Le déclencheur de l'animation
            start: "0%", // Où l'animation commence par rapport au déclencheur
            end: "35%", // Où l'animation se termine par rapport au déclencheur
            scrub: 0.5, // Pour un défilement plus doux
        },
        fontSize: "2rem", // Taille de police réduite
        opacity: 0, // Opacité réduite à 0 pour disparition complète
    });

    // Créez l'animation avec ScrollTrigger pour la lune
    gsap.to(moon, {
        scrollTrigger: {
            trigger: ".all", // Le déclencheur de l'animation
            start: "-5%", // Où l'animation commence par rapport au déclencheur
            end: "50%", // Où l'animation se termine par rapport au déclencheur
            scrub: 0.5, // Pour un défilement plus doux
            markers: true,
        },
        scale: 5, // Facteur de zoom
    });

    // Ajoutez d'autres étapes d'animation au besoin

});
