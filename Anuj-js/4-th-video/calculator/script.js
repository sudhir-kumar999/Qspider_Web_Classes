const input = document.getElementById('input');
const button = document.getElementsByClassName('button')



function append(value){
    input.value+=value;
}

function calculate(){
  // const ip =  input.value;
   const result = eval(input.value)
   input.value =result;
}

input.addEventListener('keydown' , (event)=>{
    if(event.key === 'Enter'){
        input.value=eval(input.value)
    }
})