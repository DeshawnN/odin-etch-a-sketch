makeGrid(16, 16);
addHoverEvents();
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

function addHoverEvents() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = "lightblue";
        });

        item.addEventListener('mouseleave', event => {
            event.target.style.backgroundColor = "initial";
        })
    });
}