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
let winner





/*------------------------ Cached Element References ------------------------*/


let boardEl = document.querySelector('.container')
let allSquares = document.querySelectorAll('.square')
// let allSquaresArr = Array.from(allSquares)
let messageEl = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)





/*-------------------------------- Functions --------------------------------*/

function init() {
  setMines()
  renderGameBoard()
  winner = null

  render()
  
}


init()



function renderGameBoard() {
  // this creates the game board dom from the array [row][column]
gameBoard.forEach(function (row, idx) {
  row.forEach(function (square, i) {
    let newSquare = document.createElement('div')
    newSquare.className = "square"
    newSquare.id = `${idx}${i}`
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
  checkNeighbor(evt)
  // console.log(clickedSquare.value);
  
}

function checkForMine(evt) {
  if (evt.target.value === -1) {
    console.log('boom');
    winner = false
    return
  }
}


function gameOver() {
  console.log('you lose');
}

let neighbors = []

function checkNeighbor(evt) {
  let x = parseInt(evt.target.id[1])
  let y = parseInt(evt.target.id[0])
  
  
  //northWest 0,1
  if (y > 0 && x > 0) {
    neighbors.push(y-1,x-1)
  } else {neighbors.push(null, null)}
  
  //north 2, 3
  if (y > 0) {
    neighbors.push(y-1, x)
  } else {neighbors.push(null, null)}

  //northEast
  if (y > 0 && x < 9) {
    neighbors.push(y-1, x+1)
  } else {neighbors.push(null, null)}
  
  //west
  if (x > 0) {
    neighbors.push(y, x-1)
  } else {neighbors.push(null, null)}

  //east
  if (x < 9) {
    neighbors.push(y, x+1)
  } else {neighbors.push(null, null)}

  //southWest
  if (y < 7 && x > 0) {
    neighbors.push(y+1, x-1)
  } else {neighbors.push(null, null)}
  

  //south
  if (y < 7) {
    neighbors.push(y+1, x)
  } else {neighbors.push(null, null)}
  
  //southEast
  if (y < 7 && x < 7) {
    neighbors.push(y+1, x+1)
  } else {neighbors.push(null, null)}





  // let neighborNW = gameBoard[y-1][x-1] 
  // let neighborN = gameBoard[y-1][x]
  // let neighborNE = gameBoard[y-1][x+1]
  // let neighborW = gameBoard[y][x-1]
  // let neighborE = gameBoard[y][x+1]
  // let neighborSW = gameBoard[y+1][x-1]
  // let neighborS = gameBoard[y+1][x]
  // let neighborSE = gameBoard[y+1][x+1]
  

  
  
  // console.log(neighborNW);



  // neighbors.push(neighborNW, neighborN, neighborNE, neighborW, neighborE, neighborSW, neighborS, neighborSE)

  // neighbors.push(y-1, x-1) //North West Neighbor
  // neighbors.push(y-1, x) //North Neighbor
  // neighbors.push(y-1, x+1) //North East Neighbor
  // neighbors.push(y, x-1) //West Neighbor
  // neighbors.push(y, x+1) //East Neighbor
  // neighbors.push(y+1, x-1) //South West Neighbor
  // neighbors.push(y+1, x) //South Neighbor
  // neighbors.push(y+1, x+1) //South East Neighbor
  console.log(neighbors);
  

  // checkN(evt)
  // checkNE(evt)
  // checkE(evt)
  // checkSE(evt)
  // checkS(evt)
  // checkSW(evt)
  // checkW(evt)
  // checkNW(evt)
}



function checkN(evt) {
  
  let x = evt.target.id[1]
  let y = evt.target.id[0]
  let clickedCordinates = gameBoard[y][x]
  if (y===0){
    return
  } else {
    let newY = y - 1
    let nCoOrd = gameBoard[newY][x]
    console.log(gameBoard[newY][x]);
    neighbors.push(nCoOrd)
  }
  
  
}




// let checkForBomb = () => clickedSquare.value === -1 ? console.log('boom') : console.log('reee');


// function checkNeighbors(evt) {
  
//   console.log(clickedSquare);
// }





function render() {
  displayMessage()
  // showReplay()




}



function displayMessage() {
  if (winner) {
    messageEl.innerText = "You Win! Congrats!"
  }
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
