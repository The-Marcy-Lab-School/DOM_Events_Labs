class Replacer {
    constructor(outerEl, innerEl) {
        this.container = outerEl;
        this.item = innerEl;
        this.dataHold = [];
    }

    makeForm() {
        //clear container
        this.container.innerHTML = `
        <form action="#" id='nameForm'>
            <label for='nameInput'>Name:</label>
            <input type='text' name='newName' id='nameInput' required>
            <input type="submit" value="Set Name">
        </form>
        `;
    }

    showName() {}
}

const nameCont = document.getElementById('contact');
const nameEl = document.getElementById('name');
const replacer = new Replacer(nameCont, nameEl);

nameEl.addEventListener('dblclick', () => {
    replacer.makeForm()
});



//replacer.container
//replace name with text input and 'save' button
//add event to save button-repalce form with new name from form
