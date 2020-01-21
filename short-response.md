# Unit 5 Assessment: The Document Object Model 
## Short Response Section 

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?
  The Document Object Model is a representation of the objects that make up the structure and the content of a webpage. 
  It is useful as the it can be used to read or modify the content of a webpage and any changes made will be reflected in the webpage. 

2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?
      ```javascript
      const about = document.querySelectorAll('a')
      const about = document.getElementsByClassName('primary')
      const about = document.getElementById('about')

      ```

3. Assuming we have the following code in an HTML file. Describe what the JavaScript code is doing. What would happen when we submit the form?
        
      The JavaScript code is acting on the submition from the form. It takes in the cat name that is inputed in the form and creates an <li> element then appends the cat name to the unordered list in HTML.

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
      
      

4. The following HTML and JavaScript creates a button that logs a message to the console each time it is clicked. What line or lines of code could you remove from the JavaScript file and keep the same behavior? Assume that the JavaScript file is being loaded into the HTML via a script tag.

      To keep the same behavior of logging to the console, lines containing   e.preventDefault(); and e.stopPropagation(); would be removed. This is as being able to click the button with its default feature still allows for the message to be logged. 

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

5. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.
  A user might initiate a click event that allows for actions to occur once a specific button is clicked. Mousedown 

6. Given the following HTML file, describe what would happen when a user clicks the "Alert" button? What change would you need to make to make our "handleClick" function fire?

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
