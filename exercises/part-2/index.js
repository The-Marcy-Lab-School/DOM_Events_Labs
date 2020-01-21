const name = document.getElementById('name');

name.addEventListener('dblclick', () => {
  name.innerHTML = `
  <form action="#" method="post" id="header">
    <label for="newHeader">Submit a new header!</label>
    <input type="text" id="newHeader" name="newHeader">
    <input type="submit" value="Save">
  </form>
  `;
});

name.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = name.children.header.elements.newHeader.value;

    name.innerHTML = `${input}`;
});