# CSS Dependencies for Components

One of the first things to notice about CSS Modules is how it changes the way we declare CSS dependencies.

So how did we traditionally make a dependency to a CSS file, in the olden days? With a `<link>` tag in the `<head>` of the page.

This works, but our CSS is now a dependency of the page. When we're dealing with a UI made up of components it makes much more sense if each component can have its own CSS.

## Declaring dependencies in JS modules

We have a good way to declare dependencies between JS modules, using `require` (or `import`).

eg:

```
var myModule = require('./my-module.js')
```

<div class="core-concept">
## CSS Modules allows JS modules to have CSS dependencies

CSS Modules allows us to declare a `css -> js` dependency in a similar form to a `js -> js` dependency.

eg:

```
require('./my-styles.css')
```
</div>

## Let's Make a Game

To learn more about CSS Modules we'll make some UI components for a card game. We'll start with the `Card` component.

Let's say we have a "Coin" card, and the aim of the game is to collect as many as you can:

<div id="root"></div>

At the moment the `Card` depends on CSS that has been included via a `<link>` tag in the HTML of this page.

**Task**:

- remove the card's `<link>` tag
- in the `Card` component (`src/components/card/card.js`), add a dependency to its CSS file: `require('./card.css')`

