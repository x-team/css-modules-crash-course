# Component Variants

CSS Modules composition is useful for making new components out of existing ones, but sometimes we need to provide multiple states or variations of the same component.

Let's implement the following features in our game:

```
As a Player
I want to see which cards are new
So that my micropurchase reflex is triggered
```

```
As a Player
I want to know which cards I don't have enough coins for
So that I can feel bad about myself
```

To implement these we've added 2 new properties to the `Card` component: `isNew` and `isEnabled`. Each of these flags will apply a different visual state to the card, via the following CSS classes:

- `.new`: adds a blue circle to the top-left corner of the card with the word "NEW".
- `.disabled`: causes the card to appear darkened.

Also, our AB tests have indicated that a player's micropurchase reflex is heightened when they are already feeling bad about themselves. So we definitely want to be able to combine both the `.new` and the `.disabled` classes, as well as using them individually.

- new
- disabled
- disabled + new

<div id="root"></div>

<div class="core-concept">
<h2>Use `composes` for making new components, and compose classes manually within the JS component for state-based variations.</h2>
</div>
