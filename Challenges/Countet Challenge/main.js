let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let counter = document.getElementById("display");
let surprise = document.getElementById("gift");
let img = document.querySelector("img")
let i = 0;
let start;

startBtn.onclick = function () {
  clearInterval(start);
  start = setInterval(function () {
    
      counter.innerHTML = ++i;
    
  }, 1000);
};

stopBtn.onclick = function Stop() {
  clearInterval(start);
};

resetBtn.onclick = function () {
    clearInterval(start)
    i = 0
    counter.innerHTML = i;
}

surprise.onclick = function () {
    setTimeout(function () {
        alert("i can see u  see u ")
        img.className = "avatar-img-sur";
    },3000)
    
}



