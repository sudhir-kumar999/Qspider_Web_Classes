const searchInput = document.getElementById("searchInput");
const list = document.getElementById("list");
const items = list.getElementsByTagName("li");

// searchInput.addEventListener("keyup",(e)=>{
//     let filter = searchInput.value.toLowerCase()
//     // console.log(searchInput.value)
//     for( let i=0;i<items.length;i++){
//         let text = items[i].textContent.toLowerCase()

//         if(text.includes(filter)){
//             items[i].style.display=""
//         } else{
//             items[i].style.display="none"

//         }
//     }

// })

searchInput.addEventListener("keyup",()=>{
    const filter = searchInput.value.toLowerCase();
    for(let i=0;i<items.length;i++){
        const text = items[i].textContent.toLowerCase();
        if(text.includes(filter)){
            items[i].style.display=""
        } else{
            items[i].style.display="none"

        }
    }
})