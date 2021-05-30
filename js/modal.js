let modal = document.getElementsByClassName('modal-default')
modal = modal[0];

for (i = 0; i < buttons.length; i ++) {
        if (i !== 1) {
        buttons[i].addEventListener('click', () => {
                modal.style.display = 'flex'
        })
    }
}