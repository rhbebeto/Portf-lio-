let lastScrollTop = 0;
const nav = document.querySelector('.nav-inicio');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo, oculta o menu
        nav.classList.remove('show');
    } else {
        // Rolando para cima, mostra o menu
        nav.classList.add('show');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});