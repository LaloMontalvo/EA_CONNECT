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
    const elementos = document.querySelectorAll(".scroll-effect");

    const observer = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
    );

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
});


