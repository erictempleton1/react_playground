#### TryNow.com
An attempt to recreate the buttons found on TryNow.com. Despite the rather annoying popups on that site, I really like the overall design they're implemented. The site has a cool retro style that I have been admiring lately. The "button" styles they've chosen are unique. Button is in quotes because they aren't actually `button` elements, but instead they are divs with an `a` tag inside that are styled to look like buttons. 

#### Stacking divs
* One way to stack divs is to use `position: absolute`.
* Puts an item "absolutely" on a page where you put it.
* Final position is determined the values: top, right, bottom, and left.
* You can do this with grid, but it seems a little complicated.
* Spacing is pretty difficult once you start using postion absolute.
  * Flexbox makes it a little easier, but not by much.

#### The stacking context
* 3D conceptualization of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage.
* HTML element occupy this space in priorty based on element attributes.