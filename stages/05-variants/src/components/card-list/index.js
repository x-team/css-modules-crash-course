var styles = require('./list.css')
var renderPowerupCard = require('../powerup-card')

function renderItem (item) {
  return `
<div class="${styles.item}">
  <span class="${styles.label}">${item.label}</span>
  <div class="${styles.card}">
    ${renderPowerupCard(item.card)}
  </div>
</div>
  `
}

module.exports = function renderCardList (data) {
  return `
<div class="${styles.root}">
  ${data.items.map(renderItem).join('\n')}
</div>
  `
}
