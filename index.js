let cursor = document.querySelector(".cursor");
let cursorSmall = document.querySelector(".cursorsm");

window.addEventListener("mousemove", (event) => {
  let top = event.pageY;
  let left = event.pageX;
  cursor.style.top = top + "px";
  cursor.style.left = left + "px";

  cursor.style.opacity = "1";
  cursorSmall.style.top = top + "px";
  cursorSmall.style.left = left + "px";
});
let colorFor = document.querySelector(".colorfor");
let btn = document.querySelector("#btn");
let xBtnn = document.querySelector(".cenclebtn");
btn.addEventListener("click", (event) => {
  btn.classList.toggle("obr");
  colorFor.classList.add("active");
});
xBtnn.addEventListener("click", (e) => {
  colorFor.classList.remove("active");
});
colorFor.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) {
    colorFor.classList.remove("active");
  }
});

let password = document.querySelector("#password");
let icon = document.querySelector("#icon");
icon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    icon.src = "./img/eye-open.png";
  } else {
    password.type = "password";
    icon.src = "./img/eye-close.png";
  }
});
var Obj = new XMLHttpRequest();
Obj.onreadystatechange = function () {
  if (Obj.readyState == 4 && Obj.status == 200) {
    document.querySelector(".sm").innerHTML = Obj.responseText;
  }
};
Obj.open("GET", "./index.js");
Obj.send();
