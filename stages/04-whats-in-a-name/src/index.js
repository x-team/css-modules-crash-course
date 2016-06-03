const renderBoard = require('./components/board')
const store = require('./store')

const html = renderBoard(store)

// render our component in the DOM
document.getElementById('root').innerHTML = html
