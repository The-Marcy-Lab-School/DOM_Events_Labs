let table = document.createElement('table');

function renderDataTable(data, element) {
    let tableHeader = table.createTHead();
    let row = table.insertRow();


    //header
    for(let key in data) {
        let th= document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    
    
}

const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}];
const el = document.getElementById('animals');
renderDataTable(animals, el);