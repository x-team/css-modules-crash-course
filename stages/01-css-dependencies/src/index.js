const renderCard = require('./components/card')

const html = renderCard({
  image: 'src/assets/doge.png'
})

// render our component in the DOM
document.getElementById('root').innerHTML = html
