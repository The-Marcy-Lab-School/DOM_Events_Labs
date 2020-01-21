const el = document.getElementsByTagName('html')
const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}]
const cities = [{city_name: 'New York', state: 'NY', population: 8000000}, {city_name: 'San Fransisco', state: 'CA', population: 900000}]

const renderDataTable = function(arr, element){
    const tableHead = document.getElementById('tableHead')
    const tableBody = document.getElementById('tableBody')
    
    let tr = document.createElement('tr')
    
    for(let item in Object.keys(arr[0])){
        let th = document.createElement('th')
        th.innerText = Object.keys(arr[0])[item]
        tr.appendChild(th)
        tableHead.appendChild(tr)
    }
    
    for (let obj in cities){
        tr = document.createElement('tr')
        for(let item in Object.values(arr[0])){
           let td = document.createElement('td')
           td.innerText = Object.values(arr[obj])[item]
           tr.appendChild(td)
           tableHead.appendChild(tr)
        }
    }
}

document.body.addEventListener("load", renderDataTable(animals, el));
