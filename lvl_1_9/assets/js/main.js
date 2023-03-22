const changeColor = (e) => {
  const colorCheck = document.getElementById("farbeAuswahlen");
  e.preventDefault();
  colorCheck.remove(colorCheck.selectedIndex);
};

// let button = document.querySelector("#button");
// button.addEventListener("click", function farbenWeg(e) {
//   e.preventDefault();
//   let farb = document.getElementById("farbeAuswahlen");
//   farb.remove(farb.selectedIndex);
// });
