let isScrolling;
    
const header = document.querySelector('header');
const logoCircle = document.querySelector('.logo-circle')


window.addEventListener('scroll', function () {
    header.classList.add('box-shadow');
    logoCircle.classList.add('box-shadow');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        header.classList.remove('box-shadow');
        logoCircle.classList.remove('box-shadow');

    }, 1000);
});