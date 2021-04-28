* basic email newsletter signup form
* email container that uses css grid
* using display: grid; grid-template: 1fr; is silly because the page already naturally does this.
* changing the opacity slightly is an easy way to indicate hover state.
  * sometimes finding hover colors is hard.
  * rbg makes it easy to change opacity since it takes the opacity as the 4th arg
* use accessibility audits and take the results seriously.
  * might not match your palette exactly
* for form inputs, you can hide the label element or use aria-label.
  * one of these must be in the html for the screen reader
* resizing the input form was annoying
  * ended up using a SO post that recommended flex-grow: 1; which solved the problem
  * flex: 1; is shorthand for flex-grow: 1; which 
  * flex-grow defines how much space of the remaining space in the flex container should be given to the element. In my case, I wanted the form to take all of the remaining space before the button
* Tablet 768px is an awkward size.
  * never quite sure what to do with that size
* started going down the road of implementing a grid, but flexbox seemed easier and more natural
  * had an issue where the text and input form kept crashing into each other on very large screens.
  * randomly fixed that issue by adding justify-content: space-between; on that breakpoint...lucky guess