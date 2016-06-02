# What's in a Name?

When writing UI components we often want to use default styles and then override them as needed. For example, we might want a Card component to appear slightly differently based on whether it is in the players hand, or the discard pile.

## Traditional CSS

Here's how this is often solved in traditional CSS:

```
.item {
  color: red;
  background: green;
}

.list .item {
  color: blue;
}
```

What's happening here? We're define default styles as `.item`, and the we redefine what `.item` means when it's in the context of a `.list`.

This is fine when your codebase is small and simple, but it introduces some really tricky problems. Now, in order to understand what `.item` means you can't just look at one part of the CSS, you need to at all of the CSS _and_ know the context that it's being used in.

Imagine a function that behaved differently depending on where it was called from...

## CSS Modules says "compose, don't cascade"

To address this, CSS Modules discourages redefining classes and instead gives us better ways to compose them. For example, we could rewrite the CSS above without redefining the meaning of any classes:

```
.item {
  color: red;
  background: green;
}

.listItem {
  composes: item;
  color: blue;
}
```

<div class="core-concept">
<h2>A name should mean 1 thing only</h2>
</div>

## The Player's Hand and the Discard Pile

**Task:** make 3 different kinds of button by composing classes
