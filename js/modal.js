const modalDivs = document.getElementsByClassName('modalDivs')
const closeModal = document.getElementById('close-modal')
const body = document.getElementById('body')
const radios = document.getElementsByClassName('radios')
const enterPledge = document.getElementsByClassName('enterPledge')
const continueBtn = document.querySelector('.modal-default').querySelectorAll('.btn')
const modal = document.querySelector('.modal-default')
const successBtn = document.querySelector('#gotIt')




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
for(i = 0; i < continueBtn.length; i++) {
        continueBtn[i].addEventListener('click', () => {
                document.querySelector('.modal-success').style.display = 'block'
                modal.style.display = 'none'
        })
}


successBtn.addEventListener('click', () => {
        document.getElementById('Success').style.display = 'none'
        body.style.overflow = 'auto'
})