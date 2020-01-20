class SwitchSwitch {
  constructor(container, firstEl, tempEl) {
    this.container = container;
    this.firstEl = firstEl;
    this.tempEl = tempEl;
  }

  showTempEl() {
    this.container.innerHTML = '';
    this.container.appendChild(this.tempEl);
  }

  showFirstEl() {
    this.container.innerHTML = '';
    this.container.appendChild(this.firstEl);
  }
}

const contact = document.getElementById('contact');
const nameEl = document.getElementById('name');
const tempForm = document.createElement('form');
tempForm.setAttribute('id', 'nameForm');
tempForm.innerHTML = `
  <label for='nameInput'>Name:</label>
  <input type='text' name='newName' id='nameInput' required>
  <input type="submit" value="Set Name">`;


const handler = new SwitchSwitch(contact, nameEl, tempForm);

contact.addEventListener('dblclick', () => {
  handler.showTempEl();
});

tempForm.addEventListener('submit', (e) => {
  e.preventDefault();
  nameEl.innerHTML = tempForm[0].value;
  tempForm[0].value = '';
  handler.showFirstEl();
});
