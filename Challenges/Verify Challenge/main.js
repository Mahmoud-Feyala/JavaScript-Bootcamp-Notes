let all = document.querySelectorAll(".code-input");
let btn = document.querySelector(".submit-btn");
let Correctcode = ["1", "2", "3", "4", "5", "6"];
console.log(btn);
window.onload = function () {
  all[0].focus();
};

for (let index = 0; index < 5; index++) {
  all[index].oninput = function () {
    if (all[index].value.length === 1) {
      all[index].blur();
      all[index + 1].focus();
    }
  };
}

btn.onclick = function (e) {
  e.preventDefault();
  let correctCount = 0;

  for (let i = 0; i < all.length; i++) {
    if (all[i].value === Correctcode[i]) {
      correctCount++;
    }
  }

  if (correctCount === all.length) {
    alert("زي الفل يمعلم الحساب حسابك");
  } else {
    alert(" !خخخخخ حراماي ");
    location.reload();
  }
};
