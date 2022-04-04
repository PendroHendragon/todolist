function saveData(databaseName, data){
    let database = window.localStorage;
    let list = JSON.parse(database.getItem(`${databaseName}`));
    list.push(data);
    database.setItem(`${databaseName}`,list);


}

function updateData(databaseName, data){

}

function loadData(databaseName){
    let data = window.localStorage;

    return data.getItem(`${databaseName}`);


}

function createDatabase(databaseName){
    let data = window.localStorage;
    data.setItem(`${databaseName}`,{});
}

function dbExists(databaseName){
    let data = window.localStorage;

    if(data.getItem(`${databaseName}`) != null){
        return true;
    }else{
        return false;
    }



}