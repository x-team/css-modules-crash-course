var renderPowerupCard = require('../powerup-card')

module.exports = function renderCardList (data, styles) {
  function renderItem (item) {
    return `
<div class="${styles.item}">
  <div class="${styles.card}">
    ${renderPowerupCard(item.card)}
  </div>
</div>
    `
  }

  return `
<div class="${styles.root}">
  ${data.items.map(renderItem).join('\n')}
</div>
  `
}
