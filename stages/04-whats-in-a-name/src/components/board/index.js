var styles = require('./board.css')

function renderItem (cardType, data) {
  return `
<div class="${styles[cardType]}">
  <div class="${styles.inner}">
    <img class="${styles.image}" src="${data.image}" />
    <div class="${styles.title}">${data.title}</div>
    <div class="${styles.description}">${data.description}</div>
  </div>
</div>
  `
}

module.exports = function renderCardList (data) {
  return `
<div class="${styles.root}">
  <div class="${styles.hand}">
    ${data.hand.cards.map(renderItem.bind(null, 'cardInHand')).join('\n')}
  </div>

  <div class="${styles.discardPile}">
    ${data.discardPile.cards.map(renderItem.bind(null, 'cardInDiscardPile')).join('\n')}
  </div>
</div>
  `
}
