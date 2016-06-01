# What's in a Name?

## Game

We've got a general `Button` component, but sometimes we want the button to look different.

## Traditional CSS

Consider the following CSS:

```
.item {
  color: red;
  background: green;
}

.list .item {
  color: blue;
}
```

This is a common pattern in traditional CSS. We define "default styles" as `.item`, and the we redefine what `.item` means when it's in the context of a `.list`.

This is fine when your codebase is small and simple, but it introduces some really tricky problems. Now, in order to understand what `.item` means you can't just look at one part of the CSS, you need to at all of the CSS _and_ know the context that it's being used in.

Imagine a function that behaved differently depending on where it was called from...

## Core Concept: a name should mean 1 thing only

To address this CSS Modules discourages redefining classes, and instead gives us better ways to compose them. For example, we could rewrite the CSS above as:

```
.item {
  color: red;
  background: blue;
}

.listItem {
  composes: item;
  color: blue;
}
```

**Task:** make 3 different kinds of button by composing classes
