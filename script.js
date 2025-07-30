function drawGrid(number) {
    for (let i = 0; i < number * number; i++) {
        grid.appendChild(document.createElement("div"));
        grid.lastChild.style.height = 640/number + "px";
        grid.lastChild.style.width = 640/number + "px";
    }
    if (isNormal) drawingNormal();
    else if (isRainbow) drawingRainbow();
}

function drawingNormal() {
    isNormal = true, isRainbow = false;

    let squares = grid.querySelectorAll("div");

    for (let square of squares) {
        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "pink";
        })
    }
}

function drawingRainbow() {
    isNormal = false, isRainbow = true;

    let squares = grid.querySelectorAll("div");

    for (let square of squares) {
        square.addEventListener("mousemove", () => {
            let random_red = Math.floor(Math.random() * 256);
            let random_green = Math.floor(Math.random() * 256);
            let random_blue = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${random_red},${random_green},${random_blue})`;
        })
    }

}

const grid = document.querySelector(".grid");
const resetButton = document.querySelector(".resetButton");
const normalButton = document.querySelector(".normalButton");
const rainbowButton = document.querySelector(".rainbowButton");
let isNormal = true, isRainbow = false;

resetButton.addEventListener("click", () => {
    let squares = grid.querySelectorAll("div");
    
    for (let square of squares) {
        square.remove();
    }
    let number = Math.min(parseInt(prompt("Enter number (1 - 64): ")),64);
    drawGrid(number);
})

normalButton.addEventListener("click", () => {
    isNormal = true, isRainbow = false;
    drawingNormal();
});

rainbowButton.addEventListener("click", () => {
    isRainbow = true, isNormal = false;
    drawingRainbow();
});

drawGrid(16);