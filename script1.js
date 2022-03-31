//  var bubble = document.querySelector(".bubble")
var clutter = " ";
function getNewBubble(){
 for(var i = 0;i<=111;i++){
    var rn = Math.floor(Math.random()*20);
     clutter += `<div class="bubble">${rn}</div>`
 }
 document.querySelector("#down").innerHTML = clutter;
}
getNewBubble();
var score =  0;
function scoreSetter(newScore){
    score = newScore;
    document.querySelector("#score").textContent = score;
}
scoreSetter(score);
var timer = 60;
document.querySelector("#timer").textContent = timer;
function setTimer(){
        setInterval(function(){
            if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        // else{
        //     document.querySelector(".bubble").innerHTML = `<h1>GAME OVER</h1>`;
        // }
    },1000);  
}
var hitd;
setTimer(timer);
function getNewHit(){
    hitd = Math.floor(Math.random()*20);
    document.querySelector("#hit").textContent = hitd;
}
getNewHit();
function mainEngine(){
    document.querySelector("#down").addEventListener("click", function(dets){
        if(Number(dets.target.textContent) === hitd){
            scoreSetter(score+=10);
            getNewBubble();
            getNewHit();
            console.log("S");
        }
    })
}
mainEngine();