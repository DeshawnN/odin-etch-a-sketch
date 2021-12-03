initializer();

function initializer() {
    const resetButton = document.querySelector(".reset-button");

    resetButton.addEventListener('click', resetGrid);

    makeGrid(16, 16);
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
            event.target.style.backgroundColor = "lightblue";
        });

        item.addEventListener('mouseleave', event => {
            event.target.style.backgroundColor = item.style.getPropertyValue('--intial-color');
        })
    });
}

function resetGrid() {
    const dimensions = prompt("Grid Dimensions: (format: WxH, so 16x16 for a 16 by 16 grid)", '16x16');
    const columns = dimensions.split("x")[0];
    const rows = dimensions.split("x")[1];

    if (columns > 100 || rows > 100) {
        alert("Please try again with a number smaller than 100");
        return;
    }

    makeGrid(rows, columns);
}