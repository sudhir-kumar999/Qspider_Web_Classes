const input = document.getElementById('input');
const btn = document.getElementById('btn');
const todo = document.getElementById('todo')

btn.addEventListener('click' , ()=>{
    const text = input.value.trim();
    if(text!=""){
        const li = document.createElement('li');
        li.textContent=text;
        

        const rmv = document.createElement('button')
        rmv.textContent='remove';

        rmv.onclick =function(){
            li.remove();
        }
        li.appendChild(rmv)
        
        todo.appendChild(li);
        input.value=""
    }
})
