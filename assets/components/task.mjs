
function task(task){
    
    // const template = `<div class='task'><h4>${task} </h4><button class='btn' onclick=this.parentElement.remove(this)>Complete task</button></div>`;
    // return template;

    let text = document.createTextNode(task);

    let div = document.createElement('div');
    div.classList.add('task');
    let h4 = document.createElement('h4');
    h4.appendChild(text);
    let text2 = document.createTextNode('Complete Task');
    let button = document.createElement('button');
    let p = document.createElement('p');
    let textp = document.createTextNode('Completed');
    p.appendChild(textp);
    button.classList.add('btn');
    button.appendChild(text2);
    div.appendChild(h4);
    div.appendChild(button);

    button.addEventListener('click',function(){
        let complete = document.querySelector('#complete');
        div.appendChild(p);
        div.removeChild(button);
        
        complete.appendChild(div);
        // console.log(div);
        // button.parentElement.remove();
    });
    
    
    return div;

}

export default task;