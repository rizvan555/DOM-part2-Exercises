const firstChildButton = document.querySelectorAll("button")[0];
const lastChildButton = document.querySelectorAll("button")[1];
const nextSiblingButton = document.querySelectorAll("button")[2];
const prevSiblingButton = document.querySelectorAll("button")[3];
const myList = document.querySelector("#myList");
const output = document.querySelector("output");

firstChildButton.addEventListener("click", () => {
  output.innerHTML = myList.firstElementChild.innerHTML;
});

lastChildButton.addEventListener("click", () => {
  output.innerHTML = myList.lastElementChild.innerHTML;
});

nextSiblingButton.addEventListener("click", () => {
  output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML;
});

prevSiblingButton.addEventListener("click", () => {
  output.innerHTML = myList.lastElementChild.previousElementSibling.innerHTML;
});
