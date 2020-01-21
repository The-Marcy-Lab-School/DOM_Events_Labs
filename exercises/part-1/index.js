const el = document.getElementById('animals');
const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}];


function renderDataTable(data, el) {

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const nameKeys = Object.keys(data[0]);
  for (let i = 0; i < nameKeys.length; i += 1) {
    const th = document.createElement('th');
    th.innerText = `${nameKeys[i]}`;
    thead.appendChild(th);
  }

  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  for (let i = 0; i < data.length; i += 1) {
    const tr = document.createElement('tr');
    const nameValues = Object.values(data[i]);

    for (let j = 0; j < nameValues.length; j += 1) {
      const td = document.createElement('td');
      td.innerHTML = `${nameValues[j]}`;
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  el.appendChild(table);
}
renderDataTable(animals, el);