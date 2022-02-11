/*-------------------------------- Constants --------------------------------*/







/*---------------------------- Variables (state) ----------------------------*/
//possible values 0 is covered no bomb, -1 covered bomb, 1-8 neighber bombs
gameBoard = [
[1, 2, 3, 4, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]





/*------------------------ Cached Element References ------------------------*/


let boardEl = document.querySelector('.container')
let allSquares = document.querySelectorAll('.square')
let allSquaresArr = Array.from(allSquares)


/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', function (evt) {
  handleClick(evt)
})





/*-------------------------------- Functions --------------------------------*/

function init() {
  createGrid()
  // mapBoardValue()
  // makeBombs()
  // render()
  
}


init()



function createGrid() {
  // this creates the game board dom from the array [row][column]
gameBoard.forEach(function (row, idx) {
  row.forEach(function (square, i) {
    let newSquare = document.createElement('div')
    newSquare.className = "square"
    newSquare.id = `square-${idx}-${i}`
    newSquare.value = square
    boardEl.appendChild(newSquare)
    
  })

})
}



// function mapBoardValue() {
//   gameBoard.forEach(function (row, i1) {
//     row.forEach(function (square, i2) {
//       // allSquares[i1][i2].value = square[i1][i2]
//       allSquares[i1, i2].value = square
//       console.log(allSquares[i1, i2].value);
//     })
//   })
  
  
// }


// function mapBoardValue() {
//   allSquaresArr.forEach(function (row, i1) {
//     row.forEach(function (square, i2) {
//       console.log(square);
//       // allSquares[i1][i2].value = square[i1][i2]
//       allSquaresArr[i1, i2] = square
//       console.log(allSquaresArr[i1, i2]);
//     })
//   })
  
// }




function handleClick(evt) {
  console.log(evt.target.value);
  if (evt.target.value === undefined) {
    console.log(evt.value)
  }
}


function render() {
  
}