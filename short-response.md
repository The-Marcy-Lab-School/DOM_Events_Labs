# Unit 5 Assessment: The Document Object Model 
## Short Response Section 

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?

  The document object model is essentially a visual representation of the HTML document and what's on it. It's useful because it gives developers the abiity to target specific HTML elements to affect using JavaScript.

2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?

getElementById
getElementByTagName
querySelector

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

      ```javascript
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
  What the code is doing here is saving the input in the form to a variable called name. Then adding that name to the the innerText of an li element it's created. Then it appends that li element to the ul element called cat-list.

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
  The first two lines within the event listener can be removed. This is because there is no default behavior to the button that needs to be prevented and there is no propogation of this event that needs to be stopped.

7. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.
  
  'dblclick'
  'keydown'
  'click'
  'load'
  'submit'

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
  This button in html is saved to a variable and then a function that returns an alert is created. Then a click event listener is added to the button with a callback function of the function created before it. So when the button is pressed, the the page alerts.