function renderDataTable(objArr, element) {
  const headRow = document.createElement('tr');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const table = document.createElement('table');
  const body = document.getElementById('body');

  //Makes the header for the table
  for(let i = 0; i < Object.keys(objArr[0]).length; i++) {
    const properties = Object.keys(objArr[0]);
    const current_th = document.createElement('th');
    current_th.innerHTML = properties[i];
    headRow.appendChild(current_th);
    thead.appendChild(headRow);
    table.appendChild(thead);
  }

  //Adds properties to the rows for the table
  for(let i = 0; i < objArr.length; i++) {
    let properties = Object.values(objArr[i]);

    const bodyRow = document.createElement('tr');

    //Get all properties into their separate td's
    for(let j = 0; j < properties.length; j++) {
      let td = document.createElement('td');
      td.innerHTML = properties[j];
      bodyRow.appendChild(td);
    }

    tbody.appendChild(bodyRow);
    table.appendChild(tbody);
  }
  body.append(table);
}
const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}];
const el = document.getElementById('animals');

renderDataTable(animals, el);

const cities = [{city_name: 'New York', state: 'NY', population: 8000000}, {city_name: 'San Fransisco', state: 'CA', population: 900000}];
const el2 = document.getElementById('cities');
renderDataTable(cities, el2);