const container = document.querySelector(".container");
const makeGrid = (n = 16) => {
  if (n > 100) alert("Choose a smaller number");
  const boxSize = 960 / n;
  for (let i = 1; i <= n ** 2; i++) {
    let box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.classList.add("box");
    box.addEventListener("mouseover", () => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);

      box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
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
  let result = Number(prompt("Enter a grid size: "));
  if (document.querySelectorAll(".box")) {
    let previous = document.querySelectorAll(".box");
    previous.forEach((el) => el.remove());
  }
  makeGrid(result);
});
