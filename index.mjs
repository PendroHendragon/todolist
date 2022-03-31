import task from './assets/components/task.mjs';



let button = document.querySelector('#btn');

button.addEventListener('click', function(){
    let input = document.querySelector('#input');
    let tasks = document.querySelector('#tasks');
    if(input.value != ""){
        tasks.innerHTML += task(input.value);
        input.value = "";

    }
    
    
})