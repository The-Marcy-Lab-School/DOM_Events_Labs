const renderDataTable = function(data, el) {
    const table = document.createElement('table')
    const tableHead = document.createElement('thead')
    const row = document.createElement('tr')
    tableHead.appendChild(row)
    table.appendChild(tableHead)

    //add cells (th) to header row
    for (let i = 0; i < data.length; i++) {
        const headerData = Object.keys(data[0])[i]
        const header = document.createElement('th')
        header.innerText = `${headerData}`
        row.appendChild(header)
    }
    el.appendChild(table)

    //
    for (let i = 0; i < data.length; i++) {}

}



const animals = [
    { name: 'Martin', species: 'Elephant' },
    { name: 'Grace', species: 'Tiger' }
]
const el = document.getElementById('animals')
renderDataTable(animals, el)


const par = document.getElementById('test')
par.innerHTML = 'hello'
