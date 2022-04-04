import task from './assets/components/task.mjs';



function createDatabase(databaseName){
    let data = window.localStorage;
    let array = [];
    return data.setItem(`${databaseName}`, JSON.stringify(array));
}

function dbExists(databaseName){
    let data = window.localStorage;

    if(data.getItem(`${databaseName}`) != null){
        return true;
    }else{
        return false;
    }



}

if(!dbExists('dataId')){
    createDatabase('dataId');
}
if(!dbExists('dataTask')){
    createDatabase('dataTask');
}
if(!dbExists('dataStatus')){
    createDatabase('dataStatus');
}



let storage = window.localStorage;
function saveData(idTask,dataTask,dataStatus){
    
    let id = JSON.parse(storage.getItem('dataId'));
    let task = JSON.parse(storage.getItem('dataTask'));
    let status = JSON.parse(storage.getItem('dataStatus'));
    console.log(task);


    id.push(idTask);
    task.push(dataTask);
    status.push(dataStatus)

    
    let lastId = JSON.stringify(id);
    let lastTask = JSON.stringify(task);
    let lastStatus = JSON.stringify(status);

    storage.setItem('dataId', lastId);
    storage.setItem('dataTask',lastTask)
    storage.setItem('dataStatus',lastStatus);
    return true;

}


let tasks = document.querySelector('#tasks');
function loadData(){
    let db = window.localStorage;
    
    
    
    let imcomplete = document.querySelector('#tasks');
    let complete = document.querySelector('#complete');
    let id = JSON.parse(storage.getItem('dataId'));
    let taskk = JSON.parse(storage.getItem('dataTask'));
    let status1 = JSON.parse(storage.getItem('dataStatus'));
    
    
    if(db.getItem('dataId') != ""){
        for(let i=0;i<status1.length;i++){
            if(status1[i]=='completed'){
                complete.appendChild(task(id[i],taskk[i],status1[i]))
            }else{
                imcomplete.appendChild(task(id[i],taskk[i],status1[i]));
            }
        }

    }
    
    
    

}




let button = document.querySelector('#btn');

button.addEventListener('click', function(){
    let input = document.querySelector('#input');
    
    if(input.value != ""){
        
        let dataId = JSON.parse(storage.getItem('dataId')).length;
        console.log(dataId);
        let dataTask = input.value;
        console.log(dataTask);
        let dataStatus = 'incomplete';
        saveData(dataId,dataTask,dataStatus);
        input.value = "";

    }
    window.location.reload();
    
    
});
loadData();


