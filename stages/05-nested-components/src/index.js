const renderCardList = require('./components/card-list')

const html = renderCardList({
  items: [
    {
      label: 'New',
      card: {
        title: 'i know that feel bro',
        image: 'src/assets/that-feel.png',
        description: 'Discard all manly man cards',
        isEnabled: true,
        isNew: true
      }
    },

    {
      label: 'Disabled',
      card: {
        title: 'bat slap',
        image: 'src/assets/batman-slap.png',
        description: 'You may give your opponent 1 slap',
        isEnabled: false,
        isNew: false
      }
    },

    {
      label: 'New + Disabled',
      card: {
        title: 'business cat',
        image: 'src/assets/business-cat.png',
        description: 'Collect compound interest on your coins',
        isEnabled: false,
        isNew: true
      }
    }
  ]
})

// render our component in the DOM
document.getElementById('root').innerHTML = html
