$(document).ready(function() {
    var timeout;

    // Função para ocultar a barra de navegação com animação
    function hideNavbar() {
        $('.navbar').stop().animate({opacity: '0'}, 500);  
    }

    // Função para mostrar a barra de navegação com animação
    function showNavbar() {
        $('.navbar').stop().animate({opacity: '1'}, 150);  
    }

    // Iniciar com a barra de navegação oculta
    $('.navbar').css('opacity', '0');
    timeout = setTimeout(hideNavbar, 2000);

    // Detectar o movimento do mouse ou toque na tela
    $(document).on('mousemove touchstart', function() {
        clearTimeout(timeout);
        showNavbar();
        timeout = setTimeout(hideNavbar, 2000); // Ocultar depois de 2 segundos sem movimento
    });
});
