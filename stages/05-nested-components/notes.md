# Nested Components

## Game

We have a screen where you can add cards to your deck.

We display all of the cards available, with an "Add To Deck" button.

There is also a "Save Deck" button that you can click when you're done.

Both buttons should be based on the `Button` component, but we want the "Add To Deck" button to use a custom style.

----

Look at how the `Button` component does an `Object.assign` so it can use default styles or custom override

**Task:** write `AddToDeck/button.css` module to give the buttons a custom appearance when they are used in the `AddToDeck` list.

**Tip:** you can think of the tokens exported by a css module as its API

- further reading:
  - https://github.com/css-modules/css-modules/issues/147
  - http://simurai.com/blog/2015/05/11/nesting-components
