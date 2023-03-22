const body = document.querySelector("body");
const button = document.querySelector("button");
const umwickeln = document.querySelector(".umwickeln");
let counter = 0;

button.addEventListener("click", () => {
  const divContainer = document.createElement("div");
  divContainer.textContent = counter;
  counter++;
  if (counter % 10 === 1) {
    umwickeln.appendChild(divContainer).classList.add("weiss");
  } else {
    umwickeln.appendChild(divContainer).classList.add("rechteck");
  }
});
