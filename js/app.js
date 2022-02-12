/*-------------------------------- Constants --------------------------------*/







/*---------------------------- Variables (state) ----------------------------*/
//possible values 0 is covered no bomb, -1 covered bomb, 1-8 neighber bombs
let gameBoard = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let mineLocations = []





/*------------------------ Cached Element References ------------------------*/


let boardEl = document.querySelector('.container')
let allSquares = document.querySelectorAll('.square')
// let allSquaresArr = Array.from(allSquares)


/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)





/*-------------------------------- Functions --------------------------------*/

function init() {
  setMines()
  renderGameBoard()
  // render()
  
}


init()



function renderGameBoard() {
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


function generateMineIndex() {
  let numMines = 10
  let x
  if (!mineLocations.includes(x)) {
    for (let i = 0; i < numMines; i++) {
    let x = (Math.floor(Math.random() * (gameBoard.length * gameBoard[0].length)))
    mineLocations.push(x)
    }
  } 
  
  
  
}

// console.log(mineLocations);

function setMines() {
  generateMineIndex()
  let mineString 
  mineLocations.forEach(mine => {
    mine < 10 ? gameBoard[0][mine]= -1 :  mineString = mine.toString() 
    gameBoard[mineString[0]][mineString[1]] = -1
   
  })

}




console.log(gameBoard);





function handleClick(evt) {
  let clickedSquare = evt.target
  checkForMine(evt)
  // clickedSquare.value === -1 ? gameOver() : checkNeighbor();

  console.log(clickedSquare.value);
  
}

function checkForMine(evt) {
  console.log(evt.target.value)
}


function gameOver() {
  console.log('you lose');
}


function checkNeighbor(evt) {
  console.log(clickedSquare.value)
}


// let checkForBomb = () => clickedSquare.value === -1 ? console.log('boom') : console.log('reee');


// function checkNeighbors(evt) {
  
//   console.log(clickedSquare);
// }





function render() {
  
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