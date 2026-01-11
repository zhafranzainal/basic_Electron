// Get existing DOM node in main.html
let items = document.getElementById('items')

// Track items in local storage
exports.storage = JSON.parse(localStorage.getItem('readit-items')) || []

// Persist storage
exports.save = () => {
    localStorage.setItem('readit-items', JSON.stringify(this.storage))
}

// Set item as selected
exports.select = e => {

    // Remove currently selected item class
    document.getElementsByClassName('read-item selected')[0].classList.remove('selected')

    // Add to clicked item
    e.currentTarget.classList.add('selected')
}

// Move to newly selected item
exports.changeSelection = direction => {

    let currentItem = document.getElementsByClassName('read-item selected')[0]

    if (direction === 'ArrowUp' && currentItem.previousElementSibling) {
        currentItem.classList.remove('selected')
        currentItem.previousElementSibling.classList.add('selected')
    } else if (direction === 'ArrowDown' && currentItem.nextElementSibling) {
        currentItem.classList.remove('selected')
        currentItem.nextElementSibling.classList.add('selected')
    }

}

exports.addItem = (item, isNew = false) => {

    // Create a new DOM node
    let itemNode = document.createElement('div')

    itemNode.setAttribute('class', 'read-item')
    itemNode.innerHTML = `<img src="${item.screenshot}"><h2>${item.title}</h2>`

    items.appendChild(itemNode)

    itemNode.addEventListener('click', this.select)

    // Select the first item
    if (document.getElementsByClassName('read-item').length === 1) {
        itemNode.classList.add('selected')
    }

    // Add item to storage and persist
    if (isNew) {
        this.storage.push(item)
        this.save()
    }

}

// Add items from storage when app loads
this.storage.forEach(item => {
    this.addItem(item, false)
})
