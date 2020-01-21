let name = document.querySelector('#name')


name.addEventListener('dblclick', function(event){
   
  name.innerText = `Name `
  let x = document.createElement("input");
  x.setAttribute("type", "text");

  x.setAttribute("value", "" );

  name.appendChild(x)
 
  let y = document.createElement("Input");
  y.setAttribute("type", "submit");
  name.appendChild(y)
  y.addEventListener('click',function(event){
      name.innerText = `${x.value}`
  })
})