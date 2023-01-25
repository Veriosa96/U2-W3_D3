const countTime = document.getElementById("countSecond")

let time = parseInt(sessionStorage.getItem("n")) || 0;

let timerSecond = function (){
    countTime.innerHTML = time+=1;
    sessionStorage.setItem("n",time);
};

setInterval(timerSecond,1000)
