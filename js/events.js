console.log("\n%c GRASS HOMEPAGE V1.1 beta %c by yuanzui_cf | yz.gblog.tech", "color:#fff;background:#548235;padding:5px 0;", "color:#eee;background:#444;padding:5px 10px;");
var moreOn = false;
function lmeDis(){
    if(moreOn == true){
        $("cov99").style.display = "none";
        $("left_menu_extra").style.display = "none";
        moreOn = false;
    }
}
$("leftmenu").onmouseover = function(){
    if(moreOn == false){
        $("leftmenu").style.background = "white";
        $("leftmenu").style.boxShadow = "0px 0px 10px #74ac5050";
    }
}
$("leftmenu").onmouseout = function(){
    if(moreOn == false){
        $("leftmenu").style.background = "rgba(255, 255, 255, 0.6)";
        $("leftmenu").style.boxShadow = "";
    }
}
$("more").onclick = function(){
    if(moreOn == false){
        $("cov99").style.display = "inline";
        $("leftmenu").style.background = "white";
        $("left_menu_extra").style.display = "inline";
        moreOn = true;
    }
    else{
        lmeDis();
    }
}
$("lmeClose").onclick = function(){
    if(moreOn == true){
        lmeDis();
        $("leftmenu").style.background = "rgba(255, 255, 255, 0.6)";
        $("leftmenu").style.boxShadow = "";
    }
}
$("cov99").onclick = function(){
    lmeDis();
    $("leftmenu").style.background = "rgba(255, 255, 255, 0.6)";
    $("leftmenu").style.boxShadow = "";
}

$("cdtime").innerText = $countdown(2022, 2, 1, "春节");
$("cdtime_2").innerText = $countdown(2022, 2, 1, "春节");