const gridContainer = document.querySelector('.grid-container'); 

let gridSize = 16; //default

function createGridSquare() {
    gridContainer.innerHTML = '';

    for (let i = 1; i <= gridSize; i++) { //each column
        const gridColumn = document.createElement('div');
        gridColumn.className = 'grid-column';
        gridContainer.appendChild(gridColumn);

        for (let j = 1; j <= gridSize; j++) { //each row
            const squareBox = document.createElement('div');
            squareBox.className = 'square-box';
            gridColumn.appendChild(squareBox);
            
            /* Boxes' borders */
            squareBox.style.borderRight = '1px solid grey';

            squareBox.style.borderBottom = '1px solid grey';
            
            if (i == 1) {
                squareBox.style.borderLeft = '1px solid grey';
            } 
            
            if (j == 1) {
                squareBox.style.borderTop = '1px solid grey';
            }
        } 
    }
}

createGridSquare(); //default

function changeColor() {
    const squareBoxes = document.querySelectorAll('.square-box');
    
    squareBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        });
    });
};

changeColor(); //default

function newGridSize() {
    do {
        gridSize = prompt("Enter grid size [1-100]: ", 16);
    } while (gridSize < 1 || gridSize > 100);
    
    createGridSquare();
    changeColor();
}

const gridSizeBtn = document.querySelector('#grid-size');

gridSizeBtn.addEventListener('click', newGridSize);

const clearBoardBtn = document.querySelector('#clear-board');

clearBoardBtn.addEventListener('click', () => {
    const squareBoxes = document.querySelectorAll('.square-box');

    squareBoxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
});