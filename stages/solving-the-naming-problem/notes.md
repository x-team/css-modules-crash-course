<h1 class="title">Solving the Naming Problem</h1>

Naming things is hard! In this stage we'll see how CSS Modules makes it easier.

<h2 class="title">Adding titles to cards</h2>

For this next stage we've added a title to our Coin card:

<div id="root"></div>

**Task**: change the card's `.title` font to use `font-family: "Comic Sans MS"; color: #F0F;`

Notice how this had unexpected consequences elsewhere on the page?

The problem is that we have 2 things called `title`. How can we fix it?

<h3 class="title">1. increase specificity?</h3>

Eg. `.card .title`.

The problem with this approach is that as the project grows it leads to a never-ending specificity battle.  There's always a chance that someone will introduce a new selector which has unintended cascades.

<h3 class="title">2. come up with unique names?</h3>

Eg. BEM or SUIT conventions tell us to write classes like `.card__title`.

The downside to this approach is that it takes a lot of discipline.  Everyone in the team needs to consistently follow the same convention, and it becomes more complex the bigger your project gets.

<h2 class="title">Solution</h2>

Let's invoke the power of CSS Modules to guarantee that we get a unique name.

**Task**: edit the webpack config

change:

```
loader: 'style-loader!css-loader'
```

to:

```
loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'
```

**Task**: edit `src/components/card/index.js`

change:

```
require('./card.css')
```

to:

```
var styles = require('./card.css')
```

Now the `styles` object allows us to lookup the correct classname. To use these we'll need to edit the `class` attributes in the component's html:

change:

```
<div class="title">
```

to:

```
<div class="${styles.title}">
```

And do the same for all of the other `class` attributes too.

**Task**: restart webpack with `npm run watch`

Now take a look at the code in the DOM inspector to see the unique classnames that have been generated for us.

<div class="core-concept">
## CSS Modules automatically generates unique names

CSS Modules ensures we always have a unique name, so we can just use the most obvious name within the context of a component.

Also consider how this relates to dependencies. If we're using global selectors, we might have code dependencies coming from everywhere. If the component "owns" its css, we have confidence that these classnames are only depended on by 1 isolated part of our code.
</div>
