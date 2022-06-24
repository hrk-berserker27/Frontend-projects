const form = document.querySelector("form");
function valueValidChecker(value, type) {
  let regEx = /[a-z]+[@gmail.com]/gi;
  if (value === "") return false;
  else if (type === "email" && regEx.test(value)) return true;
  else {
    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelectorAll("input:not(input[type='submit'])");
  Array.from(input).forEach((element) => {
    const errorIcon = Array.from(document.querySelectorAll(".errorIcon"));
    const errorMessage = Array.from(document.querySelectorAll(".errorMessage"));
    const value = element.value;
    const type = element.getAttribute("type");
    if (type === "email" && !valueValidChecker(value, type)) {
      element.value = "someone@gmail.com";
      element.style.color = "hsl(0, 100%, 74%)";
    } else {
      element.value = "";
      element.style.color = "hsl(0, 100%, 74%)";
    }
    if (!valueValidChecker(value, type)) {
      element.style.border = "2px solid hsl(0, 100%, 74%)";
    } else {
      element.style.border = "2px solid hsl(248, 32%, 49%)";
    }
    errorIcon.forEach((item) => {
      if (
        element.dataset.id === item.dataset.id &&
        !valueValidChecker(value, type)
      ) {
        item.classList.add("visible");
      }

      if (
        element.dataset.id === item.dataset.id &&
        valueValidChecker(value, type) &&
        item.classList.contains("visible")
      ) {
        item.classList.remove("visible");
      }
    });
    errorMessage.forEach((item) => {
      if (
        element.dataset.id === item.dataset.id &&
        !valueValidChecker(value, type)
      )
        item.classList.add("visible");
      if (
        element.dataset.id === item.dataset.id &&
        valueValidChecker(value, type) &&
        item.classList.contains("visible")
      ) {
        item.classList.remove("visible");
      }
    });
  });
});
