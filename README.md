# Timers-Intervals HTML 

- Well-structured comments provide insight into each HTML element's purpose.
- Meta tags set crucial page properties like charset and viewport for compatibility.
- The page title is appropriately descriptive, aiding in SEO and user navigation.
- External stylesheet link ensures consistent styling and design across pages.
- Semantic HTML elements like <div>, <h1>, <h2>, and <p> improve code readability and accessibility.
- External JavaScript file inclusion adds interactive functionality to the page.


# Timers-Intervals CSS 

- The `.container` class styles a main content container, centering it horizontally, setting its width to 100%, and fixing its height at 100px.
- The `.welcome` class styles a welcome heading, adding a 20px margin below it for spacing.
- The `#main` ID styles the main content paragraph, adding a 20px margin below it, setting a large font size of 100px, and fixing its height at 25px.
- The `#read` ID styles a read button, centering it horizontally, adding padding around the button text, setting its width to 100%, and fixing its height at 25px.

# JavaScript- Clear and detailed comments explain each section's purpose and functionality.
- `timerEl` and `mainEl` variables are assigned to the countdown timer and main content elements respectively.
- The `message` variable holds a quote to be displayed.
- The `words` array is created by splitting the `message` into individual words.
- The `countdown()` function initiates a timer that counts down from 5 seconds and updates the timer element accordingly.
- The `displayMessage()` function displays the message one word at a time using intervals.
- Both functions use `setInterval()` to execute code at specified intervals.
- The timer is stopped using `clearInterval()` once it reaches zero, and the message display is completed.


* Which `window` method is used to delay an action for a set number of milliseconds? Why might this method be useful?
The setTimeout() method calls a function after a number of milliseconds.

The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.

