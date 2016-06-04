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

<div class="task">
Edit `src/components/card/index.js`

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
</div>

<div class="core-concept">
<h2>A CSS Module exports a map of local names to class tokens</h2>
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

## Composing classes

There are times when we want more than just a value, we want to import a group of styles.

Traditional CSS already has this concept of classes, and CSS Modules gives us an easy way to compose multiple classes together.

```
.sharknado {
  composes: shark;
  composes: tornado from "./natural-disasters.css";
}
```


## Sharing Card styles

We've seen 2 different kinds of cards so far, Coins and PowerUps. They have different layouts but some common styles. And if we are doing computering good we ought to be able to reuse those styles in both places.

<div id="root"></div>

<div class="task"></div>

- edit the css for `components/coin-card` and `components/powerup-card` to remove duplicated styles by composing classes from `components/card/card.css`
- edit `src/components/card/card.css` to use color values from `src/shared/colors.css`

Now rebuild with `npm run build` and refresh the page to see your changes.

Notice that when you compose the common `.root` class, it also brings across `.root:hover`. Pseudo-selectors are part of the class.

At first glance, `composes` might seem similar to [the extend concept](https://css-tricks.com/the-extend-concept/) used by a lot of preprocessors. However `composes` is subtly different, in that it doesn't have any effect at all on the generated CSS (take a look and you'll see!). The only effect that it has is on the CSS Module's exported tokens. So for example, the DOM node will have 2 classnames instead of 1.

<div class="core-concept">
<h2><code>composes</code> doesn't affect generated CSS, only the classnames applied to a DOM node</h2>
</div>
