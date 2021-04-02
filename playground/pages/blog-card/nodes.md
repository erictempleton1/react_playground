`.Card`
* Container and parent selector for the card itself
* Made up of 2 main parts; header image and content
  * The header image is the main image for the post
  * The content section will contain the title, description, and footer
* Set the `background-color` to white or off-white so it doesn't inherit the parent container's bg color
* A subtle `box-shadow` is what really helps identify that it is a card.
* Avoid adding padding to the `.Card` selector because we want the image to fill all the space and not have any gaps.
* Set the `max-width` to match the image width so we don't have extra space around the image if the text is large. 
  * Also forces the text to wrap
* Set a reasonable height for the card and make sure the `max-height` is set so all of the cards are the same height.

`Card__Image`
* Contains the image
* Rounding the upper left and upper right corners only of the image gives a nice clean look.

`Card__Content`
* Add padding here so all content sections are evenly spaced
* Set the card height here which gives us better control of the size and it is easier to force the footer to the bottom
* Set a reasonable height for the card and make sure the `max-height` is set so all of the cards are the same height no matter what. 
  * The line-clamp below will help with that.

`Content__Title`
* Title and link to the blog post
* Add an opacity effect on hover
* Add a line clamp to ensure that longer titles are cut off at 2 lines.

`Content__Description`
* Implements a line clamp that says any description that spans more than 4 lines will be cut off.
* Adding padding directly to this container will cause the line-clamp to show more text, so we'll add padding to the element around this selector.

`Content__Footer`
* Forced to the bottom using `margin-top: auto;`
  * Only works in flexbox
* Footer image will be hidden on small screens
