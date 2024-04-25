let service=[]

function Services(service, price){
    this.service = service;
    this.price = price;
    }
    

function isValid(service){
    let validation=true;
    if(service.title==""){
        validaion=false;
    }

    return validation;
}

function register(){
    let inputService = document.getElementById("txtService").value;
    let inputPrice = document.getElementById("txtPrice").value;
    
    let newService = new Services(inputService, inputPrice);
    if(isValid(newService)){
        showNotification("Service was registered","success");
        save(newService);
        $("input").val("");
    }
}

