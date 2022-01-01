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
function $countday(ty, tm, td, nm, isNum){
    var d = new Date();
    var till = new Date(ty + "/" + tm + "/" + td);
    var lefttime = till.getTime() - d.getTime();
    leftd = Math.floor(lefttime/(1000*60*60*24));
    if(isNum == true){
        return leftd;
    }
    if(leftd <= 0){
        return "Now";
    }
    else{
        if(nm != null)
            return "距离" + nm + "还剩" + leftd + "天";
        return "还剩" + leftd + "天";
    }
}
