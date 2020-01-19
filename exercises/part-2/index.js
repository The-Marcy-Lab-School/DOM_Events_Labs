const name = document.getElementById('name');
name.addEventListener('dblclick',switchInput);

function switchInput (event){
  event.preventDefault();
  let originalInput = event.target.innerHTML;
  console.log(originalInput);
  const form = `
    <form id ='form'>
      <label for='new-input'>Name:</label>
      <input type='text' name='new-name' id='new-input'
      <input type="submit" value="${originalInput}">
    <form>
  `;
  event.target.innerHTML = form;
  console.log(event);
  console.log(form);
}

const form = document.getElementById('form');
form.addEventListener('submit',function (e){
    e.preventDefault();
    const newInput = 'hey';
    const input = document.getElementById('new-input');
    input.value = `${newInput}`;
});
