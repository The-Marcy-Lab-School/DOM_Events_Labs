class Replacer {
  constructor(outerEl, innerEl) {
    this.container = outerEl;
    this.item = innerEl;
    this.dataHold = '';
  }

  makeForm() {
    // clear container
    this.container.innerHTML = `
        <form action="#" id='nameForm'>
            <label for='nameInput'>Name:</label>
            <input type='text' name='newName' id='nameInput' required>
            <input type="submit" value="Set Name">
        </form>
        `;

    const nameForm = document.getElementById('nameForm');
    nameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // get new input
      const newName = document.getElementById('nameInput');
      replacer.dataHold = newName.value;
      this.showName();
    });
  }

  showName() {
    this.container.innerHTML = `
        <p id='name'>${this.dataHold}</p>
        `;
    const nameEl = document.getElementById('name');
    nameEl.addEventListener('dblclick', () => {
      replacer.makeForm();
    });
  }
}

const nameCont = document.getElementById('contact');
const nameEl = document.getElementById('name');
const replacer = new Replacer(nameCont, nameEl);

nameEl.addEventListener('dblclick', () => {
  replacer.makeForm();
});
