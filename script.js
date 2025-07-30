function drawGrid(number) {
    for (let i = 0; i < number; i++) {
        grid.appendChild(document.createElement("div"));
        grid.lastChild.classList.add("row");
        for (let j = 0; j < number; j++) {
            grid.lastChild.appendChild(document.createElement("div"));
            grid.lastChild.lastChild.style.padding = `${16/number * 19}px`;
            grid.lastChild.lastChild.style.backgroundColor = "rgb(100,149,237)";
            grid.lastChild.lastChild.classList.add("square");
            if (showGrid) {
                grid.lastChild.lastChild.style.border = "1px solid black";
            } else if (!showGrid) {
                grid.style.border = "1px solid black";
            }
        }
    }
    if (isNormal) drawingNormal();
    else if (isRainbow) drawingRainbow();
    else if (isShading) shade();
    else if (isEraser) erase();
}

function handleNormal(e) {
    e.target.style.backgroundColor = "rgb(255,192,203)";
}

function handleRainbow(e) {
    let random_red = Math.floor(Math.random() * 256);
    let random_green = Math.floor(Math.random() * 256);
    let random_blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${random_red},${random_green},${random_blue})`;
}

function handleErase(e) {
    e.target.style.backgroundColor = "rgb(100,149,237)";
}

function handleShade(e) {
    let color = e.target.style.backgroundColor;
    let values = color.split(",")
    let bracketIndex = values[0].indexOf("(") + 1;
    let red = parseInt(values[0].slice(bracketIndex));
    let green = parseInt(values[1]);
    let blue = parseInt(values[2]);
    let match = red == 255 && green == 192 && blue == 203;
    if (!match) e.target.style.backgroundColor = "rgba(255,192,203,0.1)";
    if (values.length == 4) {
        let opacity = parseFloat(values[3].slice(-4,-1));
        e.target.style.backgroundColor = `rgba(255,192,203,${Math.min(1,opacity + 0.1)})`
    }
}

function removeEventHandlers(square) {
    square.removeEventListener("mouseenter", handleNormal);
    square.removeEventListener("mouseenter", handleRainbow);
    square.removeEventListener("mouseenter", handleShade);
    square.removeEventListener("mouseenter", handleErase);
}

function drawingNormal() {
    let squares = grid.querySelectorAll(".square");

    for (let square of squares) {
        removeEventHandlers(square);
        square.addEventListener("mouseenter", handleNormal);
    }
}

function drawingRainbow() {
    let squares = grid.querySelectorAll(".square");

    for (let square of squares) {
        removeEventHandlers(square);
        square.addEventListener("mouseenter", handleRainbow)
    }
}

function erase() {
    let squares = grid.querySelectorAll(".square");

    for (let square of squares) {
        removeEventHandlers(square);
        square.addEventListener("mouseenter", handleErase);
    }
}

function shade() {
    let squares = grid.querySelectorAll(".square");

    for (let square of squares) {
        removeEventHandlers(square);
        square.addEventListener("mouseenter", handleShade);
    }
}

const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clearButton");
const resizeButton = document.querySelector(".resizeButton");
const normalButton = document.querySelector(".normalButton");
const rainbowButton = document.querySelector(".rainbowButton");
const shadingButton = document.querySelector(".shadingButton");
const eraserButton = document.querySelector(".eraserButton");
const toggleButton = document.querySelector(".toggleButton");
let showGrid = true;
let isNormal = true, isRainbow = false, isEraser = false, isShading = false;
let number = 16;

clearButton.addEventListener("click", () => {
    let squares = grid.querySelectorAll(".square");
    
    for (let square of squares) {
        square.style.backgroundColor = "rgb(100,149,237)";
    }
})

resizeButton.addEventListener("click", () => {
    let squares = grid.querySelectorAll(".square");
    let rows = grid.querySelectorAll(".row");
    
    for (let square of squares) {
        square.remove();
    }

    for (let row of rows) {
        row.remove();
    }

    let number = Math.min(parseInt(prompt("Enter number (1 - 64): ")),64);
    drawGrid(number);
})

toggleButton.addEventListener("click", () => {
    let squares = grid.querySelectorAll(".square");
    if (showGrid) {
        for (let square of squares) {
            square.style.border = "0px";
        }
        grid.style.border = "1px solid black";
        showGrid = false;
    } else if (!showGrid) {
        grid.style.border = "0px";
        for (let square of squares) {
            square.style.border = "1px solid black";
        }
        showGrid = true;
    }
})

normalButton.addEventListener("click", () => {
    isNormal = true, isRainbow = false, isEraser = false, isShading = false;
    drawingNormal();
});

rainbowButton.addEventListener("click", () => {
    isRainbow = true, isNormal = false, isEraser = false, isShading = false;
    drawingRainbow();
});

shadingButton.addEventListener("click", () => { 
    isShading = true, isNormal = false, isEraser = false, isRainbow = false;
    shade();
});

eraserButton.addEventListener("click", () => {
    isEraser = true, isNormal = false, isRainbow = false, isShading = false;
    erase();
});

drawGrid(number);