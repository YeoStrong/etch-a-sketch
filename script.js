container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
  for (j = 0; j < 16; j++) {
    const grid = document.createElement("div");

    grid.addEventListener("mouseenter", () => {
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);

      grid.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    });

    grid.addEventListener("mouseleave", () => {
      grid.style.backgroundColor = "white";
    });

    container.appendChild(grid);
  }
}
