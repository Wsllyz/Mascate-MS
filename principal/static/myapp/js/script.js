$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});

document.addEventListener('DOMContentLoaded', () => {
// Botão do menu móvel
const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');

// Alternar menu móvel
mobileBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('open');
});

// Fechar o menu ao clicar em um item
const mobileNavItems = document.querySelectorAll('#mobile_nav_list .nav-item a');
mobileNavItems.forEach(item => {
item.addEventListener('click', () => {
mobileMenu.classList.remove('open');
});
});

// ScrollReveal animações
ScrollReveal().reveal('#home .title', { delay: 200, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#home .description', { delay: 400, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#home #cta_buttons', { delay: 600, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#home .social-media-buttons', { delay: 800, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#menu', { delay: 200, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#testimonials', { delay: 200, origin: 'bottom', distance: '50px' });

// Example scroll animation for dishes
const dishes = document.querySelectorAll('.dish');
dishes.forEach((dish, index) => {
ScrollReveal().reveal(dish, { delay: 200 * (index + 1), origin: 'bottom', distance: '50px' });
});
});