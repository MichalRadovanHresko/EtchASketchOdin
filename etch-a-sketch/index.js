const container = document.querySelector(".container");
const makeGrid = (n = 256) => {
  for (let i = 1; i <= n; i++) {
    let box = document.createElement("div");
    box.textContent = `Box ${i}`;
    box.classList.add("box");
    box.addEventListener(
      "mouseover",
      () => (box.style.backgroundColor = "red"),
    );
    container.appendChild(box);
  }
};
makeGrid();
const sqrs = document.querySelectorAll(".box");

// buttons
const resBtn = document.getElementById("res");
const inp = document.getElementById("input");

resBtn.addEventListener("click", () =>
  sqrs.forEach((sqr) => (sqr.style.backgroundColor = "white")),
);

let result = 0;
inp.addEventListener("click", () => {
  result = prompt("Tell us how many squares per side you want: ");
  if (document.querySelectorAll(".box")) {
    let previous = document.querySelectorAll(".box");
    previous.forEach((el) => el.remove());
  }
  makeGrid(result);
});
