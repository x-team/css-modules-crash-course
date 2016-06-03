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
        title: 'i know that feel bro',
        image: 'src/assets/that-feel.png',
        description: 'Discard all manly man cards',
        isEnabled: false,
        isNew: false
      }
    },

    {
      label: 'New + Disabled',
      card: {
        title: 'i know that feel bro',
        image: 'src/assets/that-feel.png',
        description: 'Discard all manly man cards',
        isEnabled: false,
        isNew: true
      }
    }
  ]
})

// render our component in the DOM
document.getElementById('root').innerHTML = html
