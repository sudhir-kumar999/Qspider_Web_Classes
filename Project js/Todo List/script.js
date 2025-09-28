const input = document.getElementById("input")
const list = document.getElementById("list")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    let value = input.value;
    // console.log(value)
    const li = document.createElement("li")
    list.append(li)
    li.textContent=value
    input.value=""
    
    const delt = document.createElement("button")
    delt.textContent="remove"
    li.appendChild(delt)

    delt.addEventListener("click",()=>{
        li.remove()
    })

    const edit = document.createElement("button")
    edit.textContent = "Edit"
    li.appendChild(edit)

    edit.addEventListener("click",()=>{
        const input = document.createElement("input")
        li.appendChild(input)
        input.addEventListener("change",(e)=>{
            li.textContent=e.target.value
            li.appendChild(delt)
            li.appendChild(edit)
        })
    })

    
})