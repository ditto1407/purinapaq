// Esperamos a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos los elementos
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-container');

    // Validamos que existan antes de agregar eventos (evita errores)
    if (hamburger && navMenu) {
        
        // Abrir/cerrar menú al hacer click en la hamburguesa
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace (solo en móvil)
        document.querySelectorAll('.nav-container a').forEach(link => {
            link.addEventListener('click', () => {
                // Solo cerramos si estamos en vista móvil (menos de 1400px)
                if (window.innerWidth < 1400) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

        // Opcional: Cerrar menú si se hace click fuera de él
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1400) {
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    }
});