function renderDataTable(arr, el){
    const element = document.getElementById(el);
    const thead = document.createElement('thead');
    const row = document.createElement('tr');
    const tbody = document.createElement('tbody');
    
    
    // loop for table heading 
    element.appendChild(thead);
    const keys = Object.keys(arr[1]);
    for(let i = 0; i< keys.length; i++){
        
        thead.appendChild(row);
        const head = document.createElement('th');
        row.appendChild(head);
        head.innerHTML = keys[i];
    }
    // nested loop for table data
    element.appendChild(tbody);
    for(let i = 0; i < arr.length; i ++){
        
        const createRow = tbody.insertRow(-1);
        const valueArr = Object.values(arr[i]);
        
        for(let y = 0; y < keys.length; y++){
            const newCells = createRow.insertCell(y);
            newCells.append(valueArr[y]);
            
        }
    }
}


const animals = [
    {name: 'Martin', species: 'Elephant'}, 
    {name: 'Grace', species: 'Tiger'}]
    
const cities = [
    {city_name: 'New York', state: 'NY', population: 8000000}, 
    {city_name: 'San Fransisco', state: 'CA', population: 900000}]
    
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
    

renderDataTable(fellows, 'table');
