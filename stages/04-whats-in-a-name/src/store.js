
const store = {}
store.hand = {
  cards: [
    {
      title: 'i know that feel bro',
      image: 'src/assets/that-feel.png',
      description: 'Discard all manly man cards'
    },
    {
      title: 'bat slap',
      image: 'src/assets/batman-slap.png',
      description: 'You may give your opponent 1 slap'
    },
    {
      title: 'business cat',
      image: 'src/assets/business-cat.png',
      description: 'Collect compound interest on your coins'
    }
  ]
}

store.discardPile = {
  cards: [
    {
      title: 'arson cows',
      image: 'src/assets/cows.png',
      description: 'Opponent loses 2 barns'
    },

    {
      title: 'manly man',
      image: 'src/assets/manly-man.png',
      description: '+2 strength, -9 feelings'
    },

    {
      title: 'good dog',
      image: 'src/assets/good-dog.png',
      description: '+1 happiness'
    }
  ]
}

module.exports = store;
