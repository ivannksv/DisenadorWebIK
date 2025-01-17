// Detectar scroll con debounce
let lastScrollY = 0; // Mantiene el valor anterior del scroll

function handleScroll() {
    const header = document.querySelector('header');

    // Si el usuario ha bajado más de 50px, aplica la clase
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollY = window.scrollY; // Actualiza la posición anterior
}

// Función para hacer debounce
function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout); // Limpia el temporizador previo
        timeout = setTimeout(func, delay); // Espera antes de ejecutar
    };
}


document.addEventListener("DOMContentLoaded", () => {
    const contacto = document.querySelector("#contacto .contacto");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contacto.classList.add("visible");
                    observer.unobserve(contacto); // Deja de observar después de activar la animación
                }
            });
        },
        { threshold: 0.1 } // Activa cuando al menos el 10% del elemento es visible
    );

    observer.observe(contacto);
});

// Selecciona el header
const header = document.querySelector('header');

// Detecta el evento de scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Agrega la clase cuando se desplaza hacia abajo
    } else {
        header.classList.remove('scrolled'); // Quita la clase al volver al tope
    }
});

// Seleccionamos los elementos del DOM
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#navegacion ul');
const menuOverlay = document.querySelector('#menu-overlay');
const menuLinks = document.querySelectorAll('#navegacion ul li a');

// Función para cerrar el menú
const closeMenu = () => {
    menu.classList.remove('show');
    menuOverlay.classList.remove('show'); // Oculta la sombra
};

// Manejar el clic en el botón hamburguesa
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor principal
    menu.classList.toggle('show'); // Mostrar/ocultar el menú
    menuOverlay.classList.toggle('show'); // Mostrar/ocultar la sombra
});

// Manejar clic en cada enlace del menú
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        closeMenu(); // Cierra el menú al hacer clic en un enlace
    });
});

// Cerrar el menú al hacer clic fuera de él
menuOverlay.addEventListener('click', closeMenu); // Cerrar al hacer clic en la sombra

let index = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function cambiarImagen(direccion) {
    const slides = document.querySelectorAll('.slide');
    index += direccion;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const slider = document.getElementById('slider-imagenes');
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Función para avanzar automáticamente cada 5 segundos
setInterval(() => {
    cambiarImagen(1); // Avanza a la siguiente imagen
}, 5000); // 5000 ms = 5 segundos

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 } // Aplica la animación cuando el 10% del elemento es visible
    );

    const targets = document.querySelectorAll(".texto");
    targets.forEach((target) => observer.observe(target));
});

