# CSS Modules are just like JS Modules

## Q. What is a module?

For our purposes here let's say that a Module is an isolated portion of code that only has knowledge of the outside world through the things it _imports_, and only communicates with the outside world though the things it _exports_.

```js
var squareOf = require('./square-of')

module.exports = function addSquares (a, b) {
  return squareOf(a) + squareOf(b)
}
```

## What does a CSS Module export?

Let's take a look.

**Task:** edit `src/components/card/index.js`

After `var styles = require('./card.css')` add:

```
console.log(styles)
```

You'll see something like this in the console:

```
{
  card: "card__card___3NKVt",
  inner: "card__inner___39eh3",
  image: "card__image___orw8-",
  title: "card__title___2GiVs"
}
```

On the left-hand side is the "local name" of the class, and on the right-hand size is the "class token" (that is, the actual classname used in the generated CSS).

<div class="core-concept">
<h2>CSS Module exports a map of local names to class tokens</h2>
</div>

## CSS Modules can also import

As well as exporting class tokens, CSS Modules can import and export values using the special `@value` syntax. Anything defined as a `@value` can be used in a property-value.

To define a `@value`:

```
@value myRed: #F66;

.banner {
  background-color: myRed;
}
```

To import a value from another CSS Module:

```
@value myRed from "./colors.css";

.banner {
  background-color: myRed;
}
```

## Adding new cards to the game

## Composing classes

There are times when we want more than just a value, we want to import a group of styles.

Traditional CSS already has this concept of "classes", and CSS Modules gives us an easy way to compose multiple classes together.

```
.sharknado {
  composes: shark;
  composes: tornado from "./natural-disasters.css";
}
```

## Sharing the text shadow class

