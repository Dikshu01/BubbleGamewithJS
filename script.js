hitvalue=0;
var score=0;
function getHit(){
     hitvalue = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitvalue;
}

function getscore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
function makeBubble(){
    var clutter = "";
for(var i=1;i<=154;i++)
{
    var ran = Math.floor(Math.random()*10);
    clutter +=` <div class="bubble">${ran}</div>`;
}
document.querySelector("#panelbtm").innerHTML = clutter;
}
var timmer = 60;
function runTimmer(){
   var timmerint = setInterval(function() {
        if(timmer>0){
        timmer--;
        document.querySelector("#timerval").textContent = timmer;
        }
        else{
            clearInterval(timmerint);
            document.querySelector("#panelbtm").innerHTML=`<h1>Game Over</h1> <br> <h1>Your Final Score is ${score} </h1>`;
        }
       
    } , 1000)
}
document.querySelector("#panelbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitvalue)
    {
        getscore();
        makeBubble();
        getHit();
    }
})
makeBubble();
getHit();
runTimmer();
