const name = document.getElementById('name');
const contact = document.getElementById('contact');


name.addEventListener('click', function(e){
    event.preventDefault();
    const input = document.createElement('input');
    input.setAttribute('id', 'input')
    
    const save = document.createElement('button');
    save.setAttribute('id','save_button');
    save.innerText = 'Save';
    contact.appendChild(input);
    contact.appendChild(save);

    save.addEventListener('click', function(e){
    name.innerHTML = input.value;
        
    })
    
})


