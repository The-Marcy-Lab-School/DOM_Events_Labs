const animals = [{ name: 'Martin', species: 'Elephant' }, { name: 'Grace', species: 'Tiger' }];
const element = document.getElementById('animals');

function renderDataTable(array, el) {
  // Created table and table head
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  // Grab the name keys of array at index 0
  const nameKeys = Object.keys(array[0]);
  // Loop over the name keys and created the table header also
  for (let i = 0; i < nameKeys.length; i += 1) {
    const th = document.createElement('th');
    th.innerText = `${nameKeys[i]}`;
    thead.appendChild(th);
  }

  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  // Loop over array and created table rows and the values of the object
  for (let i = 0; i < array.length; i += 1) {
    const tr = document.createElement('tr');
    const nameValues = Object.values(array[i]);

    for (let j = 0; j < nameValues.length; j += 1) {
      const td = document.createElement('td');
      td.innerHTML = `${nameValues[j]}`;
      tr.appendChild(td);
    }
    // Appened table rows to the table body
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  // Appened the table to the element
  el.appendChild(table);
}
renderDataTable(animals, element);

const cities = [{ city_name: 'New York', state: 'NY', population: 8000000 }, { city_name: 'San Fransisco', state: 'CA', population: 900000 }];
const el2 = document.getElementById('cities');
renderDataTable(cities, el2);
