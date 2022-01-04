document.oncontextmenu=customClickRight;
document.onclick=clsCustomClickRight;

var x;
var y;
var options=document.getElementById('custom-clickright');
function customClickRight(e){    
    e.preventDefault();
    options.style="width:15em;opacity:1;";
    x=Math.floor((Math.floor(e.clientX*100))/screen.width) +"%";
    y=Math.floor((Math.floor(e.clientY*100))/screen.height) +"%";
    options.style.left=x;
    options.style.top=y;
}
function clsCustomClickRight(){
    options.style=`width:0;opacity:0;;top:${y};left:${x};`;
}

document.getElementById('pc').addEventListener("click",event=>{
    event.preventDefault();
    setTimeout(()=>{window.location.href="https://parswebdesigners.ir/parscode.html"},500);
});
document.getElementById('course').addEventListener("click",event=>{
    event.preventDefault();
    setTimeout(()=>{window.location.href="https://parswebdesigners.ir/courses.php"},500);
});