const input=document.getElementById('inputBar');
const button=document.getElementById('addBtn');
const toDo=document.getElementById('toDoContainer');

button.addEventListener('click',()=>{
const newToDo=document.createElement('p');
newToDo.textContent=input.value;
newToDo.setAttribute('id','newDos')
toDo.append(newToDo);
input.value='';


newToDo.addEventListener('click',()=>{
    newToDo.style.textDecoration='line-through'
    })
    
newToDo.addEventListener('dblclick',()=>{
toDo.removeChild(newToDo);
})


})
