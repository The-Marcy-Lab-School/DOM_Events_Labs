function renderDataTable(arr, el){
    const element = document.getElementById(el);
    const thead = document.createElement('thead');
    const row = document.createElement('tr')
    // loop for table heading 
    const keys = Object.keys(arr[1]);
    for(let i = 0; i< keys.length; i++){
        element.appendChild(thead);
        thead.appendChild(row);
        const head = document.createElement('th');
        row.appendChild(head);
        head.innerHTML = keys[i];
    }
    // nested loop for table data
    for(let i = 0; i < arr.length; i ++){
        const createRow = element.insertRow(-1);
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

renderDataTable(cities, 'table');
