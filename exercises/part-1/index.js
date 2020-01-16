const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}];

const renderDataTable = function(array){
  const table = document.getElementById('animals');
  const th = document.createElement('th');
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const nameKeys = Object.keys(animals[0]);
  const nameValues = Object.values(animals[0])
  // for (let i =0; i<animals.length; i++){
  //   const name = animals[i].name[0];
  //   const species = animals[i].species[0];
  // }
  
   
  th.innerHTML += `${nameKeys}`;
  td.innerHTML +=  `${nameValues}`;
  table.appendChild(th);
  th.appendChild(tr);
  tr.appendChild(td);
  
  
}


renderDataTable(animals);
window.onload = renderDataTable(animals, el);
