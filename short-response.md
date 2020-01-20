# Unit 5 Assessment: The Document Object Model
## Short Response Section

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?
  + The DOM is a representation of the HTML or XML file that defines the markdown, or structure of a website. The DOM is an object-oriented interface for programming languages to interact with these files by reading or modifying them. This is useful because it allows us to leverage the power of JavaScript to design functionality that interacts with a website.

2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?
  + We can select the `a` element with methods like `document.getElementById('about')`, `document.getElementByClassName('primary')`, and `document.querySelector('a')`.

5. Assuming we have the following code in an HTML file. Describe what the JavaScript code is doing. What would happen when we submit the form?

      ```html
      <form id="new-cat" action="/" method="POST">
        <label for="cat-name">Name</label>
        <input type="text" name="cat-name" value="">
        <input type="submit" name="" value="Create Cat">
      </form>

      <ul id="cat-list">
      </ul>


      <script src="index.js" charset="utf-8"></script>
      ```

      ```js
      const catForm = document.getElementById('new-cat');

      catForm.addEventListener('submit', function(){
        const input = catForm[1];
        const name = input.value;
        const catList = document.getElementById('cat-list');

        const catListItem = document.createElement('li');
        catListItem.innerText = name;
        catList.append(catListItem);
      })
      ```
  + The JavaScript code is using a document method to select an element with the `id` attribute of `new-cat`, which is a `form` element and declares a variable `catForm` that binds it. Next, we are adding an event listener to the form element, specifying that when the form is submitted, execute the following anonymous function. Our anonymous function first declares a variable with the element indexed `1` of our form. Another variable, `name`, is declared with the `value` property of the input selected in the previous line, which is actually the submit input. Next, we select the `ul` element by its `id` and declare it as the value of a variable `catList`. The next lines create a list item element, make its inner text equals to our previously created `name` variable, and append it to our previously selected `ul`. In short, when we submit this form, a new list item is added to the unordered list with the text of our form input button.

6. The following HTML and JavaScript creates a button that logs a message to the console each time it is clicked. What line or lines of code could you remove from the JavaScript file and keep the same behavior? Assume that the JavaScript file is being loaded into the HTML via a script tag.

      ```html
      <button id="log">Click to Log to Console</button>

      ```

      ```js
      const button = document.getElementById('log')

      button.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log("Logging...")
      })
      ```
  + I would remove `e`, the parameter for the event, and the methods called on it, `Event.preventDefault()` and `Event.stopPropagation()`. A button element has no default behavior we need to prevent to maintain functionality, and there isn't another overlapping element that might be affected to justify the explicit prevention of the event's propagation.

7. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.
  + There are many common ways in which users typically interact with web applications, here is what those interactions can look like:
    - Mouse Events: include **clicking** and **double clicking**. Users are driven to click on elements like buttons and links.
    - Keyboard Events: include **pressing a key** in the keyboard, events specific to the **pressing down** and the **release of the key** are available. Users are drawn to press keys when we have inputs like text boxes.
    - Form Events: forms are useful in many applications to gather information, and when submitted trigger a **submit** event.

8. Given the following HTML file, describe what would happen when a user clicks the "Alert" button? What change would you need to make to make our "handleClick" function fire?

      ```html
      <!DOCTYPE html>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8">
          <title>My Website</title>
          <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
          <button id='alert'>Click to Alert!</button>
        </body>
      </html>
      ```

      ```javascript
      const button = document.getElementById('alert')

      function handleClick(){
        alert("I was clicked!")
      }

      button.addEventListener('click', handleClick)
      ```
  + In order for our function to fire, the element that we are adding this event listener to must be rendered on the page. This code currently loads our JavaScript file before the rendering of the body, meaning that when we select an element by its id, no elements exist on the DOM. Moving the `script` tag to the bottom of the `body` corrects this bug because the JavaScript is executed after rendering of the HTML.
