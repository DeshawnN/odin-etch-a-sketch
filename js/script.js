makeGrid(16, 16);
function makeGrid(cols, rows) {
    const container = document.querySelector('.grid-container');
    container.style.setProperty('--rows', rows);
    
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }
}