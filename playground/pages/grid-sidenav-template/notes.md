* define the grid with `display: grid;`
* `grid-template-columns: 120px 1fr 1fr;` says define on column that is 120px wide, and two more columns that fill the remaining space
* `grid-template-areas` is a way to name your grid area

* hide sidenav and show header on small screens
* header and content have the same width via `repeat(3, 1fr);`
* `grid-template-areas` adds the named header section on small screens, but removes it on larger screens
* `grid-template-rows: none;` will remove the row height specification (on larger screens in our case).
* `grid-template-rows: auto 1fr;` sets the row height. 
* Using auto allows us to control the space via the contents instead of hard-coding it. Much easier to align things and control spacing this way.