document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.3}s`;
    });
});