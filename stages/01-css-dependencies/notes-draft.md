# CSS Dependencies for Components

- CSS Modules can be used for all kinds of CSS, but its purpose becomes clearest when we are thinking about UI components

- Q. How do we normally declare a dependency on a CSS file?
- A. with a `<link>`

- But that makes the css a dependency of the web page. We want it to be a dependency of our UI component, which is in javascript.
- We already have a way to declare dependencies from one JS module to another, using `require` (or `import`)

eg.

```
var myModule = require('./my-module.js')
```

## Core Concept: CSS Modules allows JS components to have CSS dependencies

CSS Modules allows us to declare a `css -> js` dependency in a similar form to a `js -> js` dependency

```
require('./my-styles.css')
```

## Game

In the game we are building, we have a `Card` component.

At the moment the `Card` depends on CSS that has been included via a `<link>` tag in the HTML.

**Task**: remove the card's `<link>` tag and rewrite it as a dependency of the `card/card.js` component, using `require(./card/card.css)`
