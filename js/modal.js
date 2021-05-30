const closeModal = document.getElementById('close-modal')
let modal = document.getElementsByClassName('modal-default')
modal = modal[0];

closeModal.addEventListener('click', () => {
        modal.style.display = 'none'
})

for (i = 0; i < buttons.length; i ++) {
        if (i !== 1) {
        buttons[i].addEventListener('click', () => {
                modal.style.display = 'flex'
        })
    }
}
