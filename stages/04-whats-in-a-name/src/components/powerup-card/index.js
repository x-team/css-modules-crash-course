var styles = require('./card.css')

module.exports = function (data) {
  return `
<div class="${styles.root}">
  <div class="${styles.inner}">
     <img class="${styles.image}" src="${data.image}" />
     <div class="${styles.title}">${data.title}</div>
     <div class="${styles.description}">${data.description}</div>
  </div>
</div>
  `
}
