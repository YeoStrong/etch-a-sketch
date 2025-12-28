const container = document.querySelector("#container");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const gridNum = prompt(
    "Grid will be created by your number * number. What number do you want?(Max.100)"
  );
  if (0 < gridNum && gridNum <= 100) {
    document.getElementById("container").innerHTML = "";
    createGrid(gridNum);
  } else {
    alert("Please write number between 1 and 100");
  }
});

function createGrid(size) {
  const gridSize = 960 / size;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const grid = document.createElement("div");

      grid.style.width = `${gridSize}px`;
      grid.style.height = `${gridSize}px`;
      grid.style.boxSizing = "border-box";
      grid.style.border = "1px solid #eee";

      grid.addEventListener("mouseenter", () => {
        grid.style.transition = "0s";
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);

        grid.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      });

      grid.addEventListener("mouseleave", () => {
        grid.style.backgroundColor = "white";
        grid.style.transition = "background-color 2s";
      });

      container.appendChild(grid);
    }
  }
}

createGrid(16);
