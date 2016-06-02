var styles = require('./card.css')
var cx = require('classnames/bind').bind(styles)

module.exports = function (data) {
  var variants = {
    new: data.isNew,
    disabled: !data.isEnabled
  }
  return `
<div class="${cx('root', variants)}">
  <div class="${styles.inner}">
     <img class="${styles.image}" src="${data.image}" />
     <div class="${styles.title}">${data.title}</div>
     <div class="${styles.description}">${data.description}</div>
  </div>
</div>
  `
}
