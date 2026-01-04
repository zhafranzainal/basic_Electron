const { ipcRenderer } = require("electron")

// DOM Nodes
let showModal = document.getElementById('show-modal'),
    closeModal = document.getElementById('close-modal'),
    modal = document.getElementById('modal'),
    addItem = document.getElementById('add-item'),
    itemUrl = document.getElementById('url')

// Show modal
showModal.addEventListener('click', e => {
    modal.style.display = 'flex'
    itemUrl.focus()
})

// Hide modal
closeModal.addEventListener('click', e => {
    modal.style.display = 'none'
})

// Handle new item
addItem.addEventListener('click', e => {

    // Check url exists
    if (itemUrl.value) {
        // Send new item url to main process
        ipcRenderer.send('new-item', itemUrl.value)
    }

})

// Listen for new item from main process
ipcRenderer.on('new-item-success', (e, newItem) => {
    console.log(newItem)
})

// Listen for keyboard input
itemUrl.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        addItem.click()
    }
})