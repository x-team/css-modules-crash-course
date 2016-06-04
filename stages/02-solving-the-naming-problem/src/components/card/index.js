var styles = {
  card: 'card',
  inner: 'inner',
  image: 'image',
  title: 'title',
  description: 'description'
}

require('./card.css')

module.exports = function (data) {
  return `
<div class="${styles.card}">
  <div class="${styles.inner}">
     <img class="${styles.image}" src="${data.image}" />
     <div class="${styles.title}">${data.title}</div>
     <div class="${styles.description}">${data.description}</div>
  </div>
</div>
  `
}
