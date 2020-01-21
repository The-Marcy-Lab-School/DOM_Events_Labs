# Unit 5 Assessment: The Document Object Model 
## Short Response Section 

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?
  The Document Object Model is like a skeleton or outline of the html elements in a webpage

2. Given some HTML that looks like this:

      ```html
      <div id="content">
        <h1>Listings</h1>
        <a id="about" class="primary" href="/about">About Our Listings</a>
      </div>
      ```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?
  ```javascript
  let aVar = document.getElementById("about");
  let aVar1 = document.getElementByClassName("primary");
  let aVar2 = document.getElementByTagName("a");
  
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

When the submit button is clicked then the user input element is saved to the variable "input", while it's value is  being saved to the variable "name". Later in the unordered list a new list element is created and it's text is changed to the value the user had inputed and then it's added to the list. In other words, the input that the user has submitted on the form will now be part of the cat list and be visible on the page.

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
You can remove stopPropagation since having it doesn't really effect the parent elements

7. When developing web applications, what are some examples of events that a user might initiate? Describe at least five.

click, exit, back, key pressing, refresh

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
When you click the button the page would simply alert "I was clicked!". To make this better you can add a picture to the body of a picture of a cute animal that says "Thanks for clicking me!  :)"