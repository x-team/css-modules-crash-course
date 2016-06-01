# Solving the Naming Problem

- Naming things is hard! According to cliche, one of the hardest things in computer science.

**Task**: change the `.title` font to use `font-family: "Comic Sans MS"; color: #fff;`

- Notice that this had unexpected consequences (other `.title` on the page is affected)

- Q. Problem is that we have 2 things called `title`. How can we fix it?
  - increase specificity? Eg. `.card .title`. Never-ending specificity battle.
  - come up with unique names? Eg. BEM `.card__title`. Takes a lot of discipline, everyone in the team needs to consistently follow the same convention.

- A. Let's use the power of computers to guarantee that we get a unique name.

**Task**: change the webpack config to add `?modules=1`

**Task**: `var styles = require('./card.css')` and `class="${styles.title}"`

- Now take a look at the code in the DOM inspector to see the unique classnames that have been generated for us.

- Naming Problem solved! Now we can just use the most obvious name, within the context of this component.

- Consider how this relates to dependencies. If we're using global selectors, we might have code dependencies coming from everywhere. If the component "owns" its css, we have confidence that these classnames are only depended on by 1 isolated part of our code.
