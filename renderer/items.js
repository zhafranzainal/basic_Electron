// Get existing DOM node in main.html
let items = document.getElementById('items')

// Track items in local storage
exports.storage = JSON.parse(localStorage.getItem('readit-items')) || []

// Persist storage
exports.save = () => {
    localStorage.setItem('readit-items', JSON.stringify(this.storage))
}

exports.addItem = item => {

    // Create a new DOM node
    let itemNode = document.createElement('div')

    itemNode.setAttribute('class', 'read-item')
    itemNode.innerHTML = `<img src="${item.screenshot}"><h2>${item.title}</h2>`

    items.appendChild(itemNode)

    // Add item to storage and persist
    this.storage.push(item)
    this.save()

}
