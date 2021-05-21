const nav = document.getElementById('links');
const burger = document.getElementById('burger');

function toggleHamburger() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none'
    } else if (nav.style.display === none) {
        nav.style.display = 'block'}
}

burger.addEventListener('click', toggleHamburger)