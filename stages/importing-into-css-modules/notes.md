# Importing into CSS Modules

We've seen how CSS Modules export things, and they can also import.

CSS Modules tries to stick closely to plain CSS syntax where possible, but there are a few cases where new syntax is introduced.

We can use `@value` to define a property-value. Anything defined as a `@value` is also exported from the module.

**Task**: take a look at `shared.css`:

```
@value myRed: #F66;
@value myBlue: #69F;
```

And we can import values from other CSS Modules.

```
@value myRed from "./shared.css";

.foo {
  color: myRed;
}
```

**Task**: view with `css2js`

## Game

We want the `Card` and the `Legend` component to have the same color

**Task**: import the color value into the `Card` and `Legend` components

## Composing classes

There are times when we want more than just a value, we want to share a group of styles.

Traditional CSS already has this concept of "classes", and CSS Modules gives us an easy way to compose multiple classes together.

```
.foo {
  composes: bar;
  composes: fred from "./other-file.css";
}
```

## Game

We also want the `Card` and `Legend` components to have the same text shadow.

**Task**: compose the `textShadow` class from `shared.css` with `Card` and `Legend`

**Tip**: We've seen how we can have js -> css dependencies. In the same way, when we import values and class tokens from other CSS Modules we're creating css -> css dependencies.

**Tip**: At first glance, `composes` might seem similar to [the extend concept](https://css-tricks.com/the-extend-concept/) used by a lot of preprocessors. However `composes` is subtly different, in that it doesn't have any effect at all on the generated CSS. The only effect that it has is on the CSS Module's exported tokens. So for example, the DOM node will have 2 classnames instead of 1.
