let btn = document.querySelector(".theme-toggle-btn");
let all = document.querySelector(".kage");
console.log(all);
btn.onclick = function () {
  all.classList.toggle("dark-mode");
};

