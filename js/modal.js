const modalDivs = document.getElementsByClassName('modalDivs')
const closeModal = document.getElementById('close-modal')
const body = document.getElementById('body')
const radios = document.getElementsByClassName('radios')
const enterPledge = document.getElementsByClassName('enterPledge')
let modal = document.getElementsByClassName('modal-default')
modal = modal[0];



closeModal.addEventListener('click', () => {
        modal.style.display = 'none'
        body.style.overflow = 'auto'
})



for (i = 0; i < buttons.length; i ++) {
        if (i !== 1) {
        buttons[i].addEventListener('click', () => {
                modal.style.display = 'flex'
                body.style.overflow = 'hidden'
        })
    }
}

function showPledge(x) {
        for(i = 0; i < enterPledge.length; i++) {
                const enterPledge = document.getElementsByClassName('enterPledge')
                enterPledge[i].style.display = 'none'        
        }
                enterPledge[x].style.display = 'block'
}

