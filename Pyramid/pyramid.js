const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber -1) + " ".repeat(rowCount - rowNumber);    
}
/*
for (let i = 1; i <= count; i++ ) {
    rows.push(padRow(i, count));
}
*/

let continueloop = false;
let done = 0;

while(done !== count ) {
    done++;
    rows.push(padRow(done,count));
    if(done == count) {
        continueloop = false;
    }
}

let result = " ";
for ( const row of rows) {
    result = result + "\n" + row;    
}

console.log(result);