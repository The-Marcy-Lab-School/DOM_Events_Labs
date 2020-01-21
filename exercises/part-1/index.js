function renderDataTable(arrObj, el){
    const body = document.getElementById('body');
    const table = document.createElement('table');
    table.setAttribute("id", el);
    
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody'); 
       
    for (let i = 0; i < Object.keys(arrObj[0]).length; i++){
        const keys = Object.keys(arrObj[0]);
        const th = document.createElement('th');
        th.innerHTML = keys[i];
        
        thead.appendChild(th);
        table.appendChild(thead);
    }
    
    for (let i = 0; i < arrObj.length; i++){
        const values = Object.values(arrObj[i]);
        const tr = document.createElement('tr');
        
        for (let j = 0; j < values.length; j++){
            const td = document.createElement('td');
            td.innerHTML = values[j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }
    
    body.appendChild(table);
}


const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}]
const el = document.getElementById('animals')
renderDataTable(animals, el)

const cities = [{city_name: 'New York', state: 'NY', population: 8000000}, {city_name: 'San Fransisco', state: 'CA', population: 900000}]
const el1 = document.getElementById('cities')
renderDataTable(cities, el1)