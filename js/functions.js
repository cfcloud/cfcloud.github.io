function $(id, isClass){
    if(isClass == true){
        return document.getElementsByClassName(id)[0];
    }
    else if(document.getElementById(id) != null){
        return document.getElementById(id);
    }
    else{
        return document.getElementsByClassName(id)[0];
    }
}
