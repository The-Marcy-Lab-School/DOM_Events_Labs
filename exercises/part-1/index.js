function renderDataTable(tableData){
    let table = document.createElement('table')
    document.querySelector('body').append(table)
    let headerRow = document.createElement('tr')
    let header = document.createElement('thead')
    let amtOfHeaders = Object.values(tableData[0]).length
    for (let i = 0; i < amtOfHeaders; i++){
        let newHeader = document.createElement('th')
        newHeader.innerText = Object.keys(tableData[0])[i]
        header.appendChild(newHeader)
    }
    headerRow.appendChild(header)
    table.appendChild(headerRow)
    
    let tablebody = document.createElement('tbody')
    table.appendChild(tablebody)
    
    tableData.forEach(function(tablerow){
        // for (i = 0;i < animals.length; i++){
        let newRow = document.createElement('tr')
        for (let header in tablerow){
            // console.log(header)
            let data = document.createElement('td')
            data.innerText = `${tablerow[header]}`
            newRow.appendChild(data)
            tablebody.appendChild(newRow)
            // console.log(newRow)
        }
        
        // body.appendChild(newRow)
            
    })
}
renderDataTable([{city_name: 'New York', state: 'NY', population: 8000000}, {city_name: 'San Fransisco', state: 'CA', population: 900000}])


// function renderDataTable(element){
  
//     element.forEach(function(x){
//         // for (i = 0;i < animals.length; i++){
//         let newRow = document.createElement('tr')
//         let newName = document.createElement('td')
//         let newSpecies= document.createElement('td')
//         let prop = 'name';
//         newName.innerText = `${x[prop]}`;
//         newSpecies.innerText = `${x.species}`;
//         newRow.appendChild(newName);
//         newRow.appendChild(newSpecies);
//         // the new row is made with the data attached now I have to loop through the objects and ket the keys and values
//         // newName.innerText = `${animals[name]}`;
//         // newSpecies.innerText = `${animals[species]}`;
//         document.querySelector('tbody').append(newRow)
            
//     })
// }
// renderDataTable([{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}])