const form = document.querySelector(".input");
const input = document.getElementById("email");
const errorMessage = document.querySelector(".error-text");
const errorIcon = document.querySelector(".error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let myRegEx = /[@]gmail.com/g;
  if (!myRegEx.test(input.value)) {
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
  }
});
