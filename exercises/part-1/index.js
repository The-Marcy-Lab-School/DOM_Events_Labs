const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}];

const el = document.getElementById('animals');
const renderDataTable = function(array,el){
  const tbody = document.createElement('tbody');
  const th = document.createElement('th');
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  
  for(let i = 0; i < animals.length; i++){
    for (let name of Object.keys(animals[i])){
      const nameValues = Object.values(animals[i]);
      th.innerHTML += `${name}`;
      td.innerHTML +=  `${nameValues}`;
      el.appendChild(tbody);
      tbody.appendChild(th);
      th.appendChild(tr);
      tr.appendChild(td);
    }
  } 
};

renderDataTable(animals,el);
/*
for (let i = 0; i < animals.length; i ++){
    for (let name of Object.keys(animals[i])){
        console.log(name)
        let value = Object.values(animals[i])
        console.log(value)
    }
}
*/