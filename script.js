const container = document.querySelector(".container");

function drawGrid(number) {
    for (let i = 0; i < number * number; i++) {
        if (i % number == number - 1) {
            container.appendChild(document.createElement("div"));
            container.lastChild.style.borderRight = "2px solid black";
        } else if (i % number == 0) {
            container.appendChild(document.createElement("div"));
            container.lastChild.style.borderLeft = "2px solid black";
        } else container.appendChild(document.createElement("div"));
        container.lastChild.style.height = 640/number + "px";
        container.lastChild.style.width = 640/number + "px";
    }
    squares = drawingEvent();
    return squares;
}

function drawingEvent() {
    let squares = container.querySelectorAll("div");

    for (let square of squares) {
        square.addEventListener("mousemove", () => {
            square.classList.add("hit");
        })
    }
    return squares
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    for (let square of squares) {
        square.remove();
    }
    alert("Max number is 70");
    let number = Math.min(parseInt(prompt("Enter number: ")),70)
    squares = drawGrid(number);
})

squares = drawGrid(16);
