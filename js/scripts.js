/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Language toggle function
    window.toggleLanguage = function() {
        const button = document.getElementById('langToggle');
        const currentLang = button.textContent;
        const newLang = currentLang === 'FR' ? 'EN' : 'FR';
        const showLang = currentLang === 'FR' ? 'fr' : 'en';
        const hideLang = currentLang === 'FR' ? 'en' : 'fr';
        
        // Update button text
        button.textContent = newLang;
        
        // Toggle visibility of language elements
        document.querySelectorAll(`[data-lang="${showLang}"]`).forEach(el => {
            el.style.display = '';
        });
        document.querySelectorAll(`[data-lang="${hideLang}"]`).forEach(el => {
            el.style.display = 'none';
        });
    };

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
