const renderCard = require('./components/card')
const store = require('./store')

function renderAllCards (cards) {
  return cards.map(renderCard).join('\n')
}

const html = `
<div>
  ${renderAllCards(store.cards)}
</div>
`

// render our component in the DOM
document.getElementById('root').innerHTML = html
