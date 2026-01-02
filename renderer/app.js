// DOM Nodes
let showModal = document.getElementById('show-modal'),
    closeModal = document.getElementById('close-modal'),
    modal = document.getElementById('modal')

// Show modal
showModal.addEventListener('click', e => {
    modal.style.display = 'flex'
})

// Hide modal
closeModal.addEventListener('click', e => {
    modal.style.display = 'none'
})