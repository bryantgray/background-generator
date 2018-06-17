var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

css.textContent= body.style.background = "linear-gradient(to right, rgb(255, 0, 0), rgb(0, 255, 0));";

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent= body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
  color1.value = "#"+Math.random().toString(16).slice(2,8);
  color2.value = "#"+Math.random().toString(16).slice(2,8);
  setGradient();
});

