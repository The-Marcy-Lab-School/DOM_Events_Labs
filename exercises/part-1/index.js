function renderDataTable(collection, element) {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');

  const collectionProps = Object.keys(collection[0]);
  for (let i = 0; i < collectionProps.length; i += 1) {
    const tableHeader = document.createElement('th');
    tableHeader.innerText = `${collectionProps[i]}`;
    tableHead.appendChild(tableHeader);
  }

  table.appendChild(tableHead);

  const tableBody = document.createElement('tbody');

  for (let i = 0; i < collection.length; i += 1) {
    const tableRow = document.createElement('tr');
    const keysData = Object.values(collection[i]);
    for (let j = 0; j < keysData.length; j += 1) {
      const tableData = document.createElement('td');
      tableData.innerHTML = `${keysData[j]}`;
      tableRow.appendChild(tableData);
    }
    tableBody.appendChild(tableRow);
  }

  table.appendChild(tableBody);

  element.appendChild(table);
}

const animals = [
  { name: 'Martin', species: 'Elephant' },
  { name: 'Grace', species: 'Tiger' },
];

const el = document.getElementById('animals');
renderDataTable(animals, el);

const cities = [
  { city_name: 'New York', state: 'NY', population: 8000000 },
  { city_name: 'San Fransisco', state: 'CA', population: 900000 },
];

const el2 = document.getElementById('cities');
renderDataTable(cities, el2);


const fellows = [{
    Name: 'Enmanuel',
    Age: 19,
    Tag: '@edln',
    'Favorite Color': 'blue',
  },
  {
    Name: 'Devonte',
    Age: 20,
    Tag: '@the_engineer',
    'Favorite Color': 'purple',
  },
  {
    Name: 'Laisha',
    Age: 19,
    Tag: '@newJnewMe',
    'Favorite Color': 'pink',
  },
  {
    Name: 'Cielo',
    Age: 19,
    Tag: '@enElCielo',
    'Favorite Color': 'yellow',
  },
  {
    Name: 'Paul',
    Age: 21,
    Tag: '@paully',
    'Favorite Color': 'red',
  },
];

const el3 = document.getElementById('fellows');
renderDataTable(fellows, el3);
