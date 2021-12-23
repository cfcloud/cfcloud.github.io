function $(id){
    return document.getElementById(id);
}
function $getClass(classname){
    return document.getElementsByClassName(classname)[0];
}
function $countday(ty, tm, td, nm){
    var d = new Date();
    var till = new Date(ty + "/" + tm + "/" + td);
    if(d.getTime() > till.getTime()){
        return "Now";
    }
    else{
        var lefttime = till.getTime() - d.getTime();
        leftd = Math.floor(lefttime/(1000*60*60*24));
        if(nm != null)
            return "距离" + nm + "还剩" + leftd + "天";
        return "还剩" + leftd + "天";
    }
}
