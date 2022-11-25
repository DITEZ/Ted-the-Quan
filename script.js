function validateForm(){
    var uname = document.forms["myForm"]["username"].value;
    var pass = document.forms["myForm"]["password"].value;

    if((!isEmpty(uname, "Log In")) && (!isEmpty(pass, "Password"))){
        window.location.assign("dashboard.html");
        alert ("login successful");
        return true;
    }else{
        return false;
    }
}

function isEmpty(elemValue, field){
    if((elemValue == "") || (elemValue == null)){
        alert("you can not have "+field+" field empty");
        return true;
    }else{
        return false;
    }
}