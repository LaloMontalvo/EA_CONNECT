document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navbar.classList.remove("transparent");
        } else {
            navbar.classList.remove("scrolled");
            navbar.classList.add("transparent");
        }
    }

    // Ejecutar al cargar y al hacer scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    
});


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".collage-item");

    function scrollEffect() {
        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 50) {
                item.classList.add("scroll-effect");
            }
        });
    }

    window.addEventListener("scroll", scrollEffect);
    scrollEffect();
});
