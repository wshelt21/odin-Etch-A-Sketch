const grid = document.querySelector('.grid-container');
const resetButton = document.querySelector('button');


// Grid Function
const createGrid = (gridNum) =>{
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    for(let i = 0; i < gridNum; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');


    for(let j = 0; j < gridNum; j++){
        const widthAndHeight = (960 / gridNum)-2;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${widthAndHeight}px`;
        cell.style.height = `${widthAndHeight}px`;

        cell.addEventListener('mouseenter', ()=>{
            cell.style.backgroundColor = "skyblue"; 
        })
        row.appendChild(cell);
    }

    wrapper.appendChild(row);
    }
    grid.appendChild(wrapper)
}

createGrid(16);

resetButton.addEventListener('click', ()=>{
    let userSize = Number(prompt('Select a Grid Dimenison Size:'));       
    while(userSize > 100){
        userSize = Number(prompt('Please pick a size no greater than 100:'));
    }
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    createGrid(userSize);
})