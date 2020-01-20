const div = document.getElementById('contact');

function switchInput() {
  // switches the div inner html to a form
  const switchForm = `
    <form id ='form'>
      <label for='new-input'>Name:</label>
      <input type='text' name='new-name' id='new-input'> 
      <input type="submit" value="Submit" id ="submit">

    <form>
  `;
  div.innerHTML = switchForm;

  // adds an event listener on the form to change it back to a p tag with a new inout value
  const form = document.getElementById('form');
  const input = document.getElementById('new-input');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.innerHTML = `<p>${input.value}</p>`;
    div.appendChild(p);
  });
}

div.addEventListener('dblclick', switchInput);
