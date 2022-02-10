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
let allSquares = document.querySelectorAll('.square')


/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', function (evt) {
  console.log(evt.target.value)
})





/*-------------------------------- Functions --------------------------------*/

function init() {
  createGrid()
  //needs to map the information from gameBoard to allSquares


}


init()


function createGrid() {
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
}


















