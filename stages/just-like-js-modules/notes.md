# CSS Modules are just like JS Modules

- Q. What is a module?
- A. For our purposes here let's say that a Module is an isolated portion of code that only has knowledge of the outside world through the things it _imports_, and only communicates with the outside world though the things it _exports_.

```js
var squareOf = require('./square-of')

module.exports = function addSquares (a, b) {
  return squareOf(a) + squareOf(b)
}
```

- We saw that a CSS Module exports something: it exports "class tokens".
- It can help to understand what a CSS Module does by thinking about what it would look like as a JS Module.

**Task** Run the `css2js` cli program
