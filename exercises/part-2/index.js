let contact = document.getElementById('contact')
let name = document.getElementById('name')
let form = document.createElement('form')
form.innerHTML = `
                 <input id='newName' type="text" name="newName"/>
                 <input type="submit" value="Submit"/>`
             
name.addEventListener('dblclick', function(e){
    contact.appendChild(form)
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    name.innerText = document.getElementById("newName").value
})
