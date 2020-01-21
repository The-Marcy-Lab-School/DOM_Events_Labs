# Unit 5 Assessment: The Document Object Model 
## Short Response Section 

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?
The Document Object Model is a representation of the structure and content of the web page. 
This representation treats the HTML document as a tree where each node is an object representing a part of the document.

2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?

```javascript
  const a1 = document.getElementById('about');
  const a2 = document.getElementsByTagName('a');
  const a3 = document.getElementsByClassName('primary');
  ```


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
     
      On line 1 we are declaring a variable called `catForm` and we are storing the form into this variable. 
      We are capturing this element by its `Id` which is `new-cat`. We add an event to our form with its event type being `submit` and this event only fires when a user clicks the `button` or `input type ='submit'` inside the `form`. 
      We also pass a callback function to our eventListener and inside this function we create an `input` variable which grabs the form element at index 1. When we submit the form, on line 12 we append the li element we created,`catListItem`,and we append this element to `catList` element which we capture  by using its id `catList`. 
      On the page 'Create Cat' appear as an `li` element because we reassign `li` innerText to `name` which is the input value of our form in our html.

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

7. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.
8. 
 One such event might be a click event, for when a user click a button ,
keypress events for when a user press on a key ,keydown events for when a user stops pressing a button, scroll events for when a user scrolls the page, and finally propagtion.
Event handlers can call propagtion to stop events from propagting or passing the event onto the child node.


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
When a user clicks the button it should send an alert with the message "I was clicked!" 
In this case it will not because `script` tag that links our javascript and html to perform this function is placed in `head`. The DOM doesn't get a chance to load the element required for the script and the script cannot build the event listener because of this.