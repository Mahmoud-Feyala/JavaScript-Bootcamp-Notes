let upBtn = document.getElementById("up");

window.onscroll = function () {
  if ((window.scrollY >= 700)) {
    upBtn.classList.add("show");
  }
  else 
  {
    upBtn.classList.remove("show")
  }
};

upBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
