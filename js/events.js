var moreOn = false;
function lmeDis(){
    if(moreOn == true){
        $("cov99").style.display = "none";
        $getClass("left_menu_extra").style.display = "none";
        moreOn = false;
    }
}
$getClass("leftmenu").onmouseover = function(){
    if(moreOn == false){
    $getClass("leftmenu").style.background = "white";
    $getClass("leftmenu").style.boxShadow = "0px 0px 10px #74ac5050";}
}
$getClass("leftmenu").onmouseout = function(){
    if(moreOn == false){
        $getClass("leftmenu").style.background = "rgba(255, 255, 255, 0.6)";
        $getClass("leftmenu").style.boxShadow = "";
    }
}
$("more").onclick = function(){
    if(moreOn == false){
        $("cov99").style.display = "inline";
        $getClass("leftmenu").style.background = "white";
        $getClass("left_menu_extra").style.display = "inline";
        moreOn = true;
    }
    else{
        lmeDis();
    }
}
$("lmeClose").onclick = function(){
    if(moreOn == true){
        lmeDis();
        $getClass("leftmenu").style.background = "rgba(255, 255, 255, 0.6)";
        $getClass("leftmenu").style.boxShadow = "";
    }
}
$("cov99").onclick = function(){
    lmeDis();
    $getClass("leftmenu").style.background = "rgba(255, 255, 255, 0.6)";
    $getClass("leftmenu").style.boxShadow = "";
}