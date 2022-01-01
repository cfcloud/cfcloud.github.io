function $(id, isClass){
    var fromId = document.getElementById(id);
    var fromClass = document.getElementsByClassName(id)[0];
    if(isClass == true){
        
        return fromClass;
    }
    else if(fromId != null){
        return fromId;
    }
    else{
        return fromClass;
    }
}