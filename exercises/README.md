# DOM Exercise

## Part 1 - rendering data

In the `index.js` in the part-1 directory, write a function called `renderDataTable`. This function should take in an array of objects and an element and render inside that element a table containing the headers and data. For example, calling the function as follows:

```JavaScript
const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}]
const el = document.querySelector('body')
renderDataTable(animals, el)
```

Should render a table inside of the animals element that looks like the following:

| name      | species |
| ----------- | ----------- |
| Martin      | Elephant       |
| Grace   | Tiger        |

Calling it with a different data structure should render a different table. For example:

```JavaScript
const cities = [{city_name: 'New York', state: 'NY', population: 8000000}, {city_name: 'San Fransisco', state: 'CA', population: 900000}]
const el = document.querySelector('body')
renderDataTable(animals, el)
```

Should render:

| city_name      | state | population |
| ----------- | ----------- |----------- |
| New York      | NY       |8000000 |
| San Fransisco   | CA        | 900000|

## Part 2

Given the HTML file in `part-2`, write code in the `events.js` file so that the following behavior works.

1. Double clicking on the `name` header should **replace** the header with a form consisting of an editable text input and a submit button.
2. Submitting the form should **replace** it with a header displaying the text value that was in the input field.
3. You should be able to repeat this process of switching back and forth between header and form, with each submission of the form changing the text in the header.
