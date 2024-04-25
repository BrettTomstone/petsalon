function save (item){
    let list = readItems();
    list.push(item);
    let val = JSon.stringify(list);
    localStorage.setItem("services",val);
}

function readItems(){
    let data = localStorage.getItem("services");
    if(!data){
        return [];
    }else{
        let list =JSon.parse(data);
        returnlist;
    }
}