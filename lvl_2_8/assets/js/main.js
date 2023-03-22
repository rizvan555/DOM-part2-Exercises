const input = document.querySelector("#userinput");
const ul = document.querySelector("ul");
const enterButton = document.querySelector("#enter");

function addItem() {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = input.value;
  input.value = "";
}

enterButton.addEventListener("click", addItem);

input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addItem();
  }
});
