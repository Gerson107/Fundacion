

document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    scrollNav();
 })

function navegacionFija() {
    const barra = document.querySelector('.containerP')
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
            console.log('hola')
        } else {
            barra.classList.add('fijo');
            console.log('hola')
        }
    })

    observer.observe(document.querySelector('.intersec'));
  
}
function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}