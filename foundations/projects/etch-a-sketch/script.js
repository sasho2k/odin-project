const RGB_VALUES = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#FFFF00", // Yellow
  "#00FF00", // Green
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#8B00FF", // Violet
  "#000000", // Black
  "#808080", // Gray
  "#A52A2A", // Brown
  "#FFC0CB", // Pink
  "#00FFFF", // Cyan
  "#FF00FF", // Magenta
];

// Create the grid
function createGrid(size) {
    // Reset grid and set box size
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const boxSize = 100/size;

    // Fill container with boxes
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.classList.add("box")
        box.style.backgroundColor = "white";
        box.style.border = "1px solid black"
        box.style.width = `${boxSize}%`;
        box.style.height = `${boxSize}%`;
        box.style.boxSizing = "border-box";
        container.appendChild(box);

        box.addEventListener("mousedown", () => paint(box));
        box.addEventListener("mouseover", () => {
            if (isDrawing) { paint(box) };
        });
    }
}

// Get the grid size requested and create grid
function gridSizeButton() {
    const size = prompt("Enter a grid size. (Note: The grid will be X * X sized)");
    console.log(`Size: ${size}`);

    isNaN(size) || size > 100 || size < 1 ? alert("Invalid input.") : createGrid(size);
}

function paint(box) {
    if (box.style.backgroundColor === "white") {
        box.style.backgroundColor = RGB_VALUES[Math.floor(Math.random() * RGB_VALUES.length)]
    }
}

// Grid button takes in a size and creates a grid of that size
const gridButton = document.querySelector("#grid-button");
gridButton.addEventListener('click', gridSizeButton);

// Drawing tech
let isDrawing = false;

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);