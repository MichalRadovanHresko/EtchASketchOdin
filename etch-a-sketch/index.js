const container = document.querySelector(".container");
const makeGrid = (n = 16) => {
  if (n > 100) alert("Choose a smaller number");
  const boxSize = 960 / n;
  console.log(boxSize);
  for (let i = 1; i <= n ** 2; i++) {
    let box = document.createElement("div");
    box.textContent = `Box ${i}`;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.classList.add("box");
    box.addEventListener(
      "mouseover",
      () => (box.style.backgroundColor = "red"),
    );
    container.appendChild(box);
  }
};
makeGrid();

// buttons
const resBtn = document.getElementById("res");
const inp = document.getElementById("input");

resBtn.addEventListener("click", () =>
  document
    .querySelectorAll(".box")
    .forEach((sqr) => (sqr.style.backgroundColor = "white")),
);

inp.addEventListener("click", () => {
  let result = Number(prompt("Tell us how many squares per side you want: "));
  if (document.querySelectorAll(".box")) {
    let previous = document.querySelectorAll(".box");
    previous.forEach((el) => el.remove());
  }
  makeGrid(result);
});
