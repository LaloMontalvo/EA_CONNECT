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

// Grupos de imágenes para cada presentación
const imageGroups = [
    ["images/inicio/Carrusel1/ImagePresentationC1.jpg", 
        "images/inicio/Carrusel1/ImageCarrusel1F5.jpg",
        "images/inicio/Carrusel1/ImageCarrusel1F1.jpg", 
        "images/inicio/Carrusel1/ImageCarrusel1F2.jpg",
        "images/inicio/Carrusel1/ImageCarrusel1F3.jpg",
        "images/inicio/Carrusel1/ImageCarrusel1F4.jpg",
    ],

    ["images/inicio/Carrusel2/imagePresentationC2.jpg", 
        "images/inicio/Carrusel2/imageCarrusel2F2.jpg", 
        "images/inicio/Carrusel2/imageCarrusel2F1.jpg", 
        "images/inicio/Carrusel2/imageCarrusel2F3.jpg"
    ],

    ["images/inicio/Carrusel3/imagePresentationC3.jpg",
        "images/inicio/Carrusel3/imageCarrusel3F1.jpg", 
        "images/inicio/Carrusel3/imageCarrusel3F2.jpg",
        "images/inicio/Carrusel3/imageCarrusel3F3.jpg",
        "images/inicio/Carrusel3/imageCarrusel3F4.jpg",
        "images/inicio/Carrusel3/imageCarrusel3F5.jpg",
        "images/inicio/Carrusel3/imageCarrusel3F6.jpg",
        "images/inicio/Carrusel3/imageCarrusel3F7.jpg",
        "images/inicio/Carrusel3/imageCarrusel3F8.jpg",
    ],

    ["images/inicio/Carrusel4/imagePresentationC4.jpg", 
        "images/inicio/Carrusel4/imageCarrusel4F1.jpg", 
        "images/inicio/Carrusel4/imageCarrusel4F2.jpg",
        "images/inicio/Carrusel4/imageCarrusel4F3.jpg",
        "images/inicio/Carrusel4/imageCarrusel4F4.jpg",
        "images/inicio/Carrusel4/imageCarrusel4F5.jpg",
        "images/inicio/Carrusel4/imageCarrusel4F6.jpg"
    ],

    ["images/inicio/Carrusel5/img1.jpg", "images/inicio/Carrusel5/img2.jpg", "images/inicio/Carrusel5/img3.jpg"],
    ["images/inicio/Carrusel6/img1.jpg", "images/inicio/Carrusel6/img2.jpg", "images/inicio/Carrusel6/img3.jpg"]
];

let currentIndex = 0;
let currentGroup = 0;
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const body = document.body;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function openModal(index) {
    currentGroup = index;
    currentIndex = 0;
    updateModalImage();
    modal.style.display = "flex";
    body.classList.add("no-scroll"); // Bloquea el scroll
}

function closeModal() {
    modal.style.display = "none";
    body.classList.remove("no-scroll"); // Restaura el scroll
}

function changeImage(direction) {
    currentIndex += direction;
    updateModalImage();
}

function updateModalImage() {
    modalImage.src = imageGroups[currentGroup][currentIndex];

    // Habilitar/deshabilitar botones según la posición en el carrusel
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === imageGroups[currentGroup].length - 1;
}

// Cierra el modal si se hace clic fuera de la imagen
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Agregar detección de gestos táctiles para cambiar de imagen en dispositivos móviles
let startX = 0;

modalImage.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX;
});

modalImage.addEventListener("touchend", function(event) {
    let endX = event.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) {
        // Deslizar a la izquierda (siguiente imagen)
        if (currentIndex < imageGroups[currentGroup].length - 1) {
            changeImage(1);
        }
    } else if (diff < -50) {
        // Deslizar a la derecha (imagen anterior)
        if (currentIndex > 0) {
            changeImage(-1);
        }
    }
});



// Función de conteo rápido
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = +counter.getAttribute('data-speed'); // Velocidad específica para cada número
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    const onScroll = () => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            updateCount();
            window.removeEventListener('scroll', onScroll);
        }
    };

    window.addEventListener('scroll', onScroll);
});

//FUNCION DE ANIMACION

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

