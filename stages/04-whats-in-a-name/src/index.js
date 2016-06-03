const renderHand = require('./components/hand')
const renderDiscardPile = require('./components/discard-pile')
const store = require('./store')

const html = `
<div>
  ${renderHand(store.hand)}
  ${renderDiscardPile(store.discardPile)}
</div>

// render our component in the DOM
document.getElementById('root').innerHTML = html
