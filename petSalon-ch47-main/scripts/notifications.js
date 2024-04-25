function showNotification (){
    $("#notifications").show();
    $("#notifications").text(msg);
    $("#notifications").addClass(style);
    setTimeout(hideNotification, 3000);
}

function hideNotification(){
    $("#notification").hide();
}