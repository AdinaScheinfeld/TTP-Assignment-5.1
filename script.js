let numRows=0;
let numCols=0;

const createCell = () => {
    let cell=document.createElement('td');
    cell.classList.add('white');
    return cell;
}

const addRow = () => {
    let grid=document.getElementById('grid');
    let newRow=document.createElement('tr');
    grid.appendChild(newRow);
    if(numCols===0){
        numCols++;
    }
    for(let i=0; i<numCols; i++){
        newRow.appendChild(createCell());
    }        
    numRows++;
    console.log(numRows);
}

