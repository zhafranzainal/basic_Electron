// Get existing DOM node in main.html
let items = document.getElementById('items')

exports.addItem = item => {

    // Create a new DOM node
    let itemNode = document.createElement('div')

    itemNode.setAttribute('class', 'read-item')
    itemNode.innerHTML = `<img src="${item.screenshot}"><h2>${item.title}</h2>`

    items.appendChild(itemNode)

}
