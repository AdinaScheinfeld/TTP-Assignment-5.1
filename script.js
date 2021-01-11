let numRows=0;
let numCols=0;
let colorStatus='white';
let drawing=false;

// Creates a cell with the ability to change color when clicked and on mouseover
const createCell = (elementClass) => {
    let cell=document.createElement('td');
    cell.classList.add(elementClass);
    cell.classList.add('white');

    // Allow cell to change color when clicked
    cell.addEventListener('click', function () {
        if(colorStatus != 'white'){
            this.style.backgroundColor=colorStatus;
            this.classList.remove('white');
        }
    });

    //Allow cells to change color on mouseover
    cell.addEventListener('mousedown', e => drawing=true);
    cell.addEventListener('mouseup', e => drawing=false);
    cell.addEventListener('mousemove', e => {
        if(drawing){
            cell.style.backgroundColor=colorStatus;
            cell.classList.remove('white');
        }
    });

    return cell;
}

// Add rows
const addRow = () => {
    let grid=document.getElementById('grid');
    let newRow=document.createElement('tr');
    newRow.classList.add('tableRow');
    grid.appendChild(newRow);
    if(numCols===0){
        numCols++;
    }
    for(let i=0; i<numCols; i++){
        newRow.appendChild(createCell('tableCell'));
    }        
    numRows++;
}

// Add columns
const addColumn = () => {
    let grid=document.getElementById('grid');
    let rows=grid.getElementsByClassName('tableRow');
    if(numRows===0){
        addRow();
        removeColumn();
    }
    for(let i=0; i<numRows; i++){
        rows[i].appendChild(createCell('tableCell'));
    }
    numCols++;
}

// Remove rows
const removeRow = () => {
    let grid=document.getElementById('grid');
    grid.deleteRow(grid.numRows-1);
    numRows--;
}

// Remove columns
const removeColumn = () => {
    let grid=document.getElementById('grid');
    let rows=grid.getElementsByClassName('tableRow');
    for(let i=0; i<numRows; i++){
        grid.rows[i].deleteCell(numCols-1);
    } 
    numCols--;
}

// Process color selection from color selection dropdown menu
const changeColor = (c) => {
    document.getElementById('cc').innerText="Your selected color: "+c;
    colorStatus=c;
}

// Fill all uncolored cells with current color
const fillAllUncolored = () => {
    let cells=document.getElementsByClassName('tableCell');
    let white=[...cells].filter(cell=>cell.classList.contains('white'));
    white.forEach(cell => {
        cell.style.backgroundColor=colorStatus;
        cell.classList.remove('white');
    });
}

// Fill all cells with the selected color
const fillAllCells = () => {
    let cells=document.getElementsByClassName('tableCell');
    [...cells].forEach(cell => {
        cell.style.backgroundColor=colorStatus;
        cell.classList.remove('white');
    });
}

// Revert all cells to their original color
const clearAllCells = () => {
    let cells=document.getElementsByClassName('tableCell');
    [...cells].forEach(cell => {
        cell.style.backgroundColor='white';
        cell.classList.add('white');
    });
}

