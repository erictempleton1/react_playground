`display: grid;` 
* Switches on grid layout for the element.
* All children of the grid container element become grid items.
* Items might not look any different (unlike flexbox) because grid creates a one column grid so items are still displayed on top of each other as usual.

`grid-template-columns: 200px 200px 200px;`
* Creates 3 200px columns.
* If you had 4 children in a 3 column grid layout (as above), the fourth child would drop under the first column since there isn't a column defined for it. This could be handy for responsive design.

`grid-template-columns: 1fr 1fr 1fr;`
* The `fr` (fractional unit) unit is an alternative to using lengths and percentages.
* `fr` represents one fraction of the available space in the grid container.
* Adding to an `fr` unit will make the column larger (or take up more space).
* The `fr` unit distributes available space, not all space. If one of the columns has something large init then there will be less space to share.

`gap: 10px;`
* The space between tracks, which is shorthand for combining `row-gap` and `column-gap`.
* `gap: 10px` is the same as `row-gap: 10px; column-gap: 10px;`
* The gap unit cannot be `fr`.

`grid-template-columns: repeat(3, 1fr);`
* Short-hand for `grid-template-columns: 1fr 1fr 1fr`.

`grid-auto-rows: 100px;` 
* Columns are implicitly in a row, so adding `grid-auto-rows` will set the height of the row.

`grid-auto-rows: minmax(100px, auto);`
* The `minmax` function sets a minimum and maximum size for a track.
* For `minmax(100px, auto)` we are saying the minimum size is 100px but the max is auto, which will expand to fit the content. 
* Adding extra content past 100px will expand the column to allow it to fit.

`grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`
* Instead of using a number for the amount of columns we want, we can use auto-fill. This says "as many columns as will fit in the container at 200px each".

`Footer__Column`
* Uses flexbox to align contents nicely in a column.
* Sets the `font-size for all of the text in the column.

`Column__Link`
* Mostly provides padding.
* Change hover text opactiy.
* Remove padding from the `last-child` in the column so we don't have extra space added needlessly.
  * Generally don't like using structural helpers like this because they are guaranteed to break if you change the order of elements. But I feel reasonably confident I will always want the last item to have less padding.