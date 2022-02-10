/*-------------------------------- Constants --------------------------------*/







/*---------------------------- Variables (state) ----------------------------*/

gameBoard = [
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0 , 0, 0, 0, 0]
]





/*------------------------ Cached Element References ------------------------*/


let boardEl = document.querySelector('.container')
let tester = document.querySelector('#tester')


/*----------------------------- Event Listeners -----------------------------*/







/*-------------------------------- Functions --------------------------------*/


function createGrid() {
  let suare = document.createElement
}


// this creates the game board dom from the array [row][column]
gameBoard.forEach(function (row, idx) {
  row.forEach(function (square, i) {
    let newSquare = document.createElement('div')
    newSquare.className = "square"
    newSquare.id = `square-${idx}-${i}`
    // boardEl.appendChild(newSquare)
    boardEl.appendChild(newSquare)
  })

})








console.log(gameBoard[5][5])






