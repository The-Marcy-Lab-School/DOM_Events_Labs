# Unit 5 Assessment: The Document Object Model
## Short Response Section

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?

- The Document Object Model (DOM) is a representation of the HTML that you use when developing websites. The mental model for this is often a tree. It's useful if you want to add interactivity to your HTML using a common language JavaScript, such as animations or being able to click buttons and the like.

2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?

- `document.getElementById('about')`, `document.getElementsByClassName('primary')`, and `document.getElementsByTagName('a')`

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

- The JS is going into the `new-cat` form and adding an event listener for when the user submits a form. When they do, the form's input element is stored in `input`, and the value of the input is stored in `name`, which is what the user inputs. Then, the unordered list is targeted in `catList`. A new `li` element is created an stored in `catListItem`, and the text inside that `li` is assigned to the user's input, `name`. The `li` is then plaes inside the unordered list, `catList`. The unordered list in the webpage should now show the user's input. However, it would be quickly replaced with an error since the submit button's default is not prevented.

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
- Simply removing the `e.stopPropagation()` command would still allow the button to be clicked, and the message would still be logged in the console.

7. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.

- A click, a submit, a double click, pressing the up key, pressing the down key, pressing space, pressing enter

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

- Nothing would happen, because the value of `button` is null. To fix this, move the `script` tag to the bottom of the `body` tag.