const input = document.getElementById('input');
const btn = document.getElementById('btn');
const todo = document.getElementById('todo')


btn.addEventListener('click' , ()=>{
    
const text = input.value.trim();
    if(text!=""){
    const li = document.createElement('li');
    li.textContent=text;

        const buttton = document.createElement('button');
        buttton.textContent='Remove';

        buttton.addEventListener('click' , ()=>{
            li.remove();
        })

        const check = document.createElement('button')
        check.textContent='check';

        check.addEventListener('click' , ()=>{
            li.style.textDecoration='line-through'
        })
        check.addEventListener('dblclick' , ()=>{
            li.style.textDecoration='none'
        })
        li.appendChild(check)

        li.appendChild(buttton)
    todo.appendChild(li)
    input.value=""
    }
})
