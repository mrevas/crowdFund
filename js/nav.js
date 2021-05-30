const nav = document.querySelector('.topNav');
const burger = document.getElementById('burger');
const burgerSVG = document.getElementById('hamburger')
const buttons = document.getElementsByClassName('btn')


function toggleHamburger() {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none'
        burgerSVG.innerHTML = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>`;
        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    } else {
        nav.style.display = 'flex'
        burgerSVG.innerHTML = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`;

        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
}

burger.addEventListener('click', toggleHamburger)