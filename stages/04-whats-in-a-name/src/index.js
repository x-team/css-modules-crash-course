const renderCoinCard = require('./components/coin-card')
const renderPowerupCard = require('./components/powerup-card')

const coinCard = renderCoinCard()
const powerupCard = renderPowerupCard({
  title: 'arson cows',
  image: 'src/assets/cows.png',
  description: 'Opponent loses 2 barns'
})

const html = `<div>
${coinCard}
${powerupCard}
</div>`

// render our component in the DOM
document.getElementById('root').innerHTML = html
