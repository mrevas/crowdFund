const nav = document.querySelector('.topNav');
const burger = document.getElementById('burger');

function toggleHamburger() {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
}

burger.addEventListener('click', toggleHamburger)