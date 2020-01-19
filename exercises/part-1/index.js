const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}];
const el = document.getElementById('animals');

const renderDataTable = function(array,el){
  const table = document.createElement('table');
  const thead = document.createElement('thead');

  const nameKeys = Object.keys(array[0]);
  for(let i = 0; i < nameKeys.length; i++){
    const th = document.createElement('th');
    th.innerText = `${nameKeys[i]}`;
    thead.appendChild(th);
  }

  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  for (let i = 0; i < array.length; i++){
    const tr = document.createElement('tr');
    const nameValues = Object.values(array[i]);
    for(let j = 0; j < nameValues.length; j++){
      const td = document.createElement('td');
      td.innerHTML = `${nameValues[j]}`;
      tr.appendChild(td);
      }
    tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    el.appendChild(table);
};


renderDataTable(animals,el);

const cities = [{city_name: 'New York', state: 'NY', population: 8000000}, {city_name: 'San Fransisco', state: 'CA', population: 900000}];
const el2 = document.getElementById('cities');
renderDataTable(cities,el2);