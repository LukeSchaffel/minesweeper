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
  checkForMine(evt)
  // clickedSquare.value === -1 ? gameOver() : checkNeighbor();
  let x = parseInt(evt.target.id[1])
  let y = parseInt(evt.target.id[0])
  let neighborArr = createNeighborArr(x, y)

  neighborArr.forEach(function (n) {
    // let objArr = Object.entries(n)
    // console.log(objArr);
    y = n.yLocation
    x = n.xLocation
    // console.log(createNeighborArr(y, x)); 
    if (Object.values(n).includes(null)) {
      console.log('has null');
    }
    
    

  })
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




function createNeighborArr(x, y) {
  
  return [checkNW(x, y), checkN(x, y),checkNE(x, y),checkW(x, y),checkE(x, y), checkSW(x, y), checkS(x, y), checkSE(x, y)]
}




function checkNW(x, y) {
  if (y > 0 && x > 0) {
    return {
      name: 'northWest',
      value: gameBoard[y-1][x-1],
      yLocation: y-1,
      xLocation: x-1
    }
  } else {return {
    name: 'northWest',
    value: null,
    yLocation: null,
    xLocation: null
  }}
}
function checkN(x, y) {
 
  if (y > 0) {
    return {
      name: 'north',
      value: gameBoard[y-1][x],
      yLocation: y-1,
      xLocation: x
    }
  } else {return {
    name: 'north',
    value: null,
    yLocation: null,
    xLocation: null
  }}
}
function checkNE(x, y) {
 
  if (y > 0 && x<9) {
    return {
      name: 'northEast',
      value: gameBoard[y-1][x+1],
      yLocation: y-1,
      xLocation: x+1
    }
  } else {return {
    name: 'northEast',
    value: null,
    yLocation: null,
    xLocation: null
  }}
}
function checkW(x, y) {
  
  if (x>0) {
    return {
      name: 'west',
      value: gameBoard[y][x-1],
      yLocation: y,
      xLocation: x-1
    }
  } else {return {
    name: 'west',
    value: null,
    yLocation: null,
    xLocation: null
  }}
}
function checkE(x, y) {
  
  if (x<9) {
    return {
      name: 'east',
      value: gameBoard[y][x+1],
      yLocation: y,
      xLocation: x+1
    }
  } else {return {
    name: 'east',
    value: null,
    yLocation: null,
    xLocation: null
  }}
}
function checkSW(x, y) {
  
  if (y < 7 && x > 0) {
    return {
      name: 'southWest',
      value: gameBoard[y+1][x-1],
      yLocation: y+1,
      xLocation: x-1
    }
  } else {return {
    name: 'southWest',
    value: null,
    yLocation: null,
    xLocation: null
  }}
}
function checkS(x, y) {

  if (y < 7) {
    return {
      name: 'south',
      value: gameBoard[y+1][x],
      yLocation: y+1,
      xLocation: x
    }
  } else {return {
    name: 'south',
    value: null,
    yLocation: null,
    xLocation: null
  }}
}
function checkSE(x, y) {

  if (y < 7 && x < 7) {
    return {
      name: 'southEast',
      value: gameBoard[y+1][x+1],
      yLocation: y+1,
      xLocation: x+1
    }
  } else {return {
    name: 'southEast',
    value: null,
    yLocation: null,
    xLocation: null
  }}
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
