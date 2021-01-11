let numRows=0;
let numCols=0;

const createCell = (elementClass) => {
    let cell=document.createElement('td');
    cell.classList.add(elementClass);
    cell.classList.add('white');
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
    let rows=document.getElementsByClassName('tableRow');
    if(numRows===0){
        addRow();
    }
    for(let i=0; i<numRows; i++){
        rows[i].appendChild(createCell('tableCell'));
    }
    numCols++;
}

