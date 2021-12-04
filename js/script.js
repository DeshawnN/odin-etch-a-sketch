initializer();

function initializer() {
    const resetButton = document.querySelector(".reset-button");

    resetButton.addEventListener('click', resetGrid);

    makeGrid(64, 64);
}

function makeGrid(width, height) {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    
    for (let col = 0; col < width; col++) {
        for (let row = 0; row < height; row++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }

    addHoverEvents();
}

function addHoverEvents() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = generateRGBColor();
        });
    });
}

function resetGrid() {
    const dimensions = +prompt("Grid Dimensions:", 64);

    if (dimensions > 100) {
        alert("Please try again with a number smaller than 100");
        return;
    }

    makeGrid(dimensions, dimensions);
}

function generateRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}