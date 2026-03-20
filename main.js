let clock = 20*60;
let running=false;

function format(t){
let m=Math.floor(t/60);
let s=t%60;
return (m<10?"0":"")+m+":"+(s<10?"0":"")+s;
}

setInterval(()=>{
if(running && clock>0){
clock--;
document.getElementById("clock").innerText=format(clock);
}
},1000);

document.getElementById("start").onclick=()=>running=true;
document.getElementById("pause").onclick=()=>running=false;
