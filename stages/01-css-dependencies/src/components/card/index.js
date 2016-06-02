require('./card.css')

module.exports = function (data) {
  return `
<div class="card">
  <div class="inner">
     <img class="image" src="${data.image}" />
  </div>
</div>
  `
}
