function drawGrid(number) {
    for (let i = 0; i < number; i++) {
        grid.appendChild(document.createElement("div"));
        grid.lastChild.classList.add("row");
        for (let j = 0; j < number; j++) {
            grid.lastChild.appendChild(document.createElement("div"));
            grid.lastChild.lastChild.style.padding = `${16/number * 19}px`;
            grid.lastChild.lastChild.classList.add("square");
        }
    }
    if (isNormal) drawingNormal();
    else if (isRainbow) drawingRainbow();
    else if (isEraser) erasing();
}

function drawingNormal() {
    isNormal = true, isRainbow = false, isEraser = false;

    let squares = grid.querySelectorAll(".square");

    for (let square of squares) {
        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "pink";
        })
    }
}

function drawingRainbow() {
    isNormal = false, isRainbow = true, isEraser = false;

    let squares = grid.querySelectorAll(".square");

    for (let square of squares) {
        square.addEventListener("mousemove", () => {
            let random_red = Math.floor(Math.random() * 256);
            let random_green = Math.floor(Math.random() * 256);
            let random_blue = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${random_red},${random_green},${random_blue})`;
        })
    }
}

function erasing() {
    isEraser = true, isNormal = false, isRainbow = false;

    let squares = grid.querySelectorAll(".square");

    for (let square of squares) {
        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "transparent";
        })
    }
}

const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clearButton");
const resizeButton = document.querySelector(".resizeButton");
const normalButton = document.querySelector(".normalButton");
const rainbowButton = document.querySelector(".rainbowButton");
const eraserButton = document.querySelector(".eraserButton");
let isNormal = true, isRainbow = false, isEraser = false;
let number = 16;

clearButton.addEventListener("click", () => {
    let squares = grid.querySelectorAll(".square");
    
    for (let square of squares) {
        square.style.backgroundColor = "transparent";
    }
})

resizeButton.addEventListener("click", () => {
    let squares = grid.querySelectorAll(".square");
    
    for (let square of squares) {
        square.remove();
    }
    let number = Math.min(parseInt(prompt("Enter number (1 - 64): ")),64);
    drawGrid(number);
})

normalButton.addEventListener("click", () => {
    isNormal = true, isRainbow = false, isEraser = false;
    drawingNormal();
});

rainbowButton.addEventListener("click", () => {
    isRainbow = true, isNormal = false, isEraser = false;
    drawingRainbow();
});

eraserButton.addEventListener("click", () => {
    isEraser = true, isNormal = false, isRainbow = false;
    erasing();
});

drawGrid(number);