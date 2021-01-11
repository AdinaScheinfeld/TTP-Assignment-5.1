let numRows=0;
let numCols=0;
let colorStatus='white';

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
        else{
            console.log('hello');
        }
    });
    return cell;
}

// Add row
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
    console.log(numRows);
}

// Add column
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

// Remove row
const removeRow = () => {
    let grid=document.getElementById('grid');
    grid.deleteRow(grid.numRows-1);
    numRows--;
}

// Remove column
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
    document.getElementById('cc').innerText="Your chosen color: "+c;
    colorStatus=c;
    console.log(colorStatus);
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