var styles = require('./card.css')

console.log(styles)

module.exports = function (data) {
  return `
<div class="${styles.card}">
  <div class="${styles.inner}">
     <img class="${styles.image}" src="${data.image}" />
     <div class="${styles.title}">${data.title}</div>
  </div>
</div>
  `
}
