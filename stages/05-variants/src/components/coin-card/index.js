var styles = require('./card.css')

module.exports = function () {
  return `
<div class="${styles.root}">
  <div class="${styles.inner}">
     <img class="${styles.image}" src="src/assets/doge.png" />
  </div>
</div>
  `
}
