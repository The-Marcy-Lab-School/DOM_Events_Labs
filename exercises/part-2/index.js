document.getElementById("name").addEventListener("dblclick",addSubmit);

function addSubmit(){
    const  contact = document.getElementById('contact');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('input');
    
    input.setAttribute("type", "text");
    input.setAttribute("id", "newInput");
    button.setAttribute("type", "submit");
    button.setAttribute("id", "bttn");
    
    contact.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);
}

const contact = document.getElementById("contact");

contact.addEventListener("submit",changeHead);

function changeHead(e){
     e.preventDefault();
    let newHead = document.getElementById("newInput").value;
    document.getElementById("name").innerHTML = `${newHead}`;
}
