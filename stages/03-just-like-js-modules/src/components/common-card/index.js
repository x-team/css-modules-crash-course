var styles = require('./card.css')

module.exports = function (data, children) {
  return `
<div class="${styles.root}">
  <div class="${styles.inner}">
    ${children}
  </div>
</div>
  `
}
