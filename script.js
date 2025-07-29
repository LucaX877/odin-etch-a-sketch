const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    if (i % 16 == 15) {
        container.appendChild(document.createElement("div"));
        container.lastChild.style.borderRight = "4px solid black";
    } else if (i % 16 == 0) {
        container.appendChild(document.createElement("div"));
        container.lastChild.style.borderLeft = "4px solid black";
    } else container.appendChild(document.createElement("div"));
}

const squares = container.querySelectorAll("div");

for (let square of squares) {
    square.addEventListener("mousemove", () => {
        square.classList.add("hit");
    })
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    for (let square of squares) {
        square.remove();
    }}
)