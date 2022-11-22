const grid = document.querySelector('.grid-container');



// Grid Function
const createGrid = (gridNum) =>{
    for(let i = 0; i < gridNum; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');


    for(let j = 0; j < gridNum; j++){
        const widthAndHeight = (500 / gridNum)-2;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${widthAndHeight}px`;
        cell.style.height = `${widthAndHeight}px`;

        cell.addEventListener('mouseenter', ()=>{
            cell.style.backgroundColor = "skyblue"; 
        })
        row.appendChild(cell);
    }

    grid.appendChild(row);
    }
}
createGrid(16);