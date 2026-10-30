document.addEventListener('DOMContentLoaded', () => {
    // Manejo del scroll para el Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Manejo de Dropdown (Resources)
    const resourcesBtn = document.getElementById('resources-btn');
    const resourcesDropdown = document.getElementById('resources-dropdown');

    if (resourcesBtn && resourcesDropdown) {
        resourcesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resourcesDropdown.classList.toggle('hidden');
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!resourcesBtn.contains(e.target) && !resourcesDropdown.contains(e.target)) {
                resourcesDropdown.classList.add('hidden');
            }
        });
    }

    // Menú Mobile (Básico)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
