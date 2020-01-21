# Unit 5 Assessment: The Document Object Model 
## Short Response Section 

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?
- The DOM is a tree of nodes and every node in the DOM contains an object. It is helpful because it allows us to manipulate and access nodes in the tree to change the DOM in any way we would like. 

2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```
What are three different `document` methods that you could use to select the `a` element and store it into a variable?
-You are able to manipuate or use the ‘a’ element with:
1. document.getElementbyTagName(‘a’)
2. document.getElementByClassName(‘primary’)
3. document.getElementById(‘about’)

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
- We are storing the form with the id ‘new-cat’ in the  variable ‘catForm’
- Then we are adding an event listener to ‘catForm’ that takes in a callback function when that will execute when the form is submitted
- In the callback function, will create a new ‘li’ element in the doc that will have the input value the user inputs as inner text.
- This will then be appended into the ‘cat-list’ element in the dom which is an unordered list. 

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
- In the js file, if the lines that prevent the default and stop propagation were removed the behavior of the button would remian the same. 



7. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.


There are different events a user can initiate to trigger a change in the DOM. We can add event listeners to listen to specific ‘events’ that occur to different elements, for example:
- mouse events: mousedown, mouseup, click, dblclick, mousemove ect. These event will be tirggered is a user ‘clicks’ on an element with their mouse, or finger dependin gon the device they are using. 
- Touch events: touchstart, touchmove, touchend, and touchcancel. These events happen with touch sensitive surfaces that a user can be using to interact with dom elements. Touches are represented by the Touch object
- keyboard events: keydown, keypress, and keyup. These keyboard events refer to a key a user is pressing and different keys that are initiated on the keyboard can be specified.
- form events: focus, blur, change, and submit. These events describe how a user might interact with a form on the DOM.
- window events: scroll, resize, hashchange, load, and unload. These events describe how a user can interact with a webpage and are also events that can be used to trigger a change in the DOM.


8. Given the following HTML file, describe what would happen when a user clicks the "Alert" button? What change would you need to make our "handleClick" function fire?

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
- The ‘handleClick’ function works perfectly but in the HTML the script tag should go under the body. This is to make sure that in the JS file, we are able to get elements from the DOM because the HTML would be fully loaded. 
