const gridContainer = document.querySelector('.grid-container'); 

function createGridSquare() {
    for (let i = 1; i <= 16; i++) { //each column
        const gridColumn = document.createElement('div');
        gridColumn.className = 'grid-column';
        gridContainer.appendChild(gridColumn);

        for (let j = 1; j <= 16; j++) { //each row
            const squareBox = document.createElement('div');
            squareBox.className = 'square-box';
            gridColumn.appendChild(squareBox);
            
            /* Boxes' borders */
            squareBox.style.borderRight = '1px solid blue'; //test (color)

            squareBox.style.borderBottom = '1px solid green'; //test (color)
            
            if (i == 1) {
                squareBox.style.borderLeft = '1px solid red'; //test (color)
            } 
            
            if (j == 1) {
                squareBox.style.borderTop = '1px solid turquoise'; //test (color)
            }
        } 
    }
}

createGridSquare();

function changeColor() {
    const squareBoxes = document.querySelectorAll('.square-box');

    squareBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        });
    });
};

changeColor();