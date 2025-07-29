const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    if (i % 4 == 0) {
        container.appendChild(document.createElement("div"));
        container.lastChild.style.borderLeft = "4px solid black";
    } else if (i % 4 == 3) {
        container.appendChild(document.createElement("div"));
        container.lastChild.style.borderRight = "4px solid black";
    }
    else container.appendChild(document.createElement("div"));
}