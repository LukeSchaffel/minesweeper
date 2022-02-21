
/*---------------------------- Variables (state) ----------------------------*/
//possible values 0 is covered no bomb, -1 covered bomb, 1-8 neighber bombs
let gameBoard = []
let revealed = []
let mineLocations = []
let winner
let numMines = 10





/*------------------------ Cached Element References ------------------------*/


let boardEl = document.querySelector('.container')
let allSquares 
let messageEl = document.getElementById('message')
let coveredSquares = document.querySelectorAll('.covered')
let safeSquaresEl = document.querySelectorAll('.safe')
let replayButton = document.getElementById('play-again')
let pictureDiv = document.getElementById('picture-div')

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)
replayButton.addEventListener('click', restart)
boardEl.addEventListener('contextmenu', handleRightClick)




/*-------------------------------- Functions --------------------------------*/

function init() {
  winner = null
  pictureDiv.innerHTML = ''
  gameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 
    ]
  revealed = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

 
    ] 

  messageEl.textContent = 'Left Click to Choose a Square. Right Click to Place a Flag!'  
  replayButton.setAttribute('hidden', true)   
  mineLocations = []  
  setMines()
  setNumbers()
  renderGameBoard()
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
allSquares = document.querySelectorAll('.square')
}


function generateMineIndex() {
  
  
  while (mineLocations.length < numMines) {
    let x = (Math.floor(Math.random() * (gameBoard.length * gameBoard[0].length)))
    if (!mineLocations.includes(x)) {
      
      mineLocations.push(x)
    }
  }

}



function setMines() {
  generateMineIndex()
  let mineString 
  mineLocations.forEach(function (mine) {
    if (mine < 10) {
      gameBoard[0][mine]= -1
    } else { 
      mineString = mine.toString() 
      gameBoard[mineString[0]][mineString[1]] = -1

    }
  })
}




function handleRightClick(evt) {
  evt.preventDefault()
  let clicked = evt.target

  if (!clicked.classList.contains('safe') && (clicked.textContent !== "🚩")){
    clicked.textContent = "🚩"
  } else if (!clicked.classList.contains('safe') && (clicked.textContent === "🚩")){
    clicked.textContent = ""
  } 

 
}


//reveal to cheat
// console.log(gameBoard);



function handleClick(evt) {
  
  let cell = evt.target
  let x
  let y
  if (cell.id.length === 2) {
    x = parseInt(evt.target.id[1])  
    y = parseInt(evt.target.id[0])
  } else {
    x = parseInt(evt.target.id[2])
    y = `${evt.target.id[0]}` + `${evt.target.id[1]}`
  }
  
  console.log(y);



  

  if (cell.value === -1) {
    winner = false
  } else if (cell.value > 0){
    cell.innerText = ""
    revealed[y][x] = 1
    
  } else if (cell.value === 0) {
    cell.innerText = ""
    cascade(x, y)
  }
  render()

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
      xLocation: x-1,
      status: null
    }
  } else {return {
    name: 'northWest',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}
function checkN(x, y) {
 
  if (y > 0) {
    return {
      name: 'north',
      value: gameBoard[y-1][x],
      yLocation: y-1,
      xLocation: x,
      status: null
    }
  } else {return {
    name: 'north',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}
function checkNE(x, y) {
 
  if (y > 0 && x<gameBoard[0].length-1) {
    return {
      name: 'northEast',
      value: gameBoard[y-1][x+1],
      yLocation: y-1,
      xLocation: x+1,
      status: null
    }
  } else {return {
    name: 'northEast',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}
function checkW(x, y) {
  
  if (x>0) {
    return {
      name: 'west',
      value: gameBoard[y][x-1],
      yLocation: y,
      xLocation: x-1,
      status: null
    }
  } else {return {
    name: 'west',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}
function checkE(x, y) {
  
  if (x<gameBoard[0].length) {
    return {
      name: 'east',
      value: gameBoard[y][x+1],
      yLocation: y,
      xLocation: x+1,
      status: null
    }
  } else {return {
    name: 'east',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}
function checkSW(x, y) {
  
  if (y < gameBoard.length-1 && x > 0) {
    return {
      name: 'southWest',
      value: gameBoard[y+1][x-1],
      yLocation: y+1,
      xLocation: x-1,
      status: null
    }
  } else {return {
    name: 'southWest',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}
function checkS(x, y) {

  if (y < gameBoard.length-1) {
    return {
      name: 'south',
      value: gameBoard[y+1][x],
      yLocation: y+1,
      xLocation: x,
      status: null
    }
  } else {return {
    name: 'south',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}
function checkSE(x, y) {

  if (y < gameBoard.length-1 && x < gameBoard[0].length-1) {
    return {
      name: 'southEast',
      value: gameBoard[y+1][x+1],
      yLocation: y+1,
      xLocation: x+1,
      status: null
    }
  } else {return {
    name: 'southEast',
    value: null,
    yLocation: null,
    xLocation: null,
    status: null
  }}
}



function setNumbers() {
  gameBoard.forEach(function (row, y) {
    row.forEach(function (cell, x) {
      if (cell !== -1){
        let cellNeighbors = createNeighborArr(x, y)
        let displayNum = 0
        cellNeighbors.forEach(function (neighbors) {
          if (neighbors.value === -1) {
            displayNum ++
          }
        })
        gameBoard[y][x] = displayNum
      } 
    })
  })
  
}


function cascade(x, y) {

  
  if (gameBoard[y][x] === 0 && revealed[y][x] === 0 ){
    revealed[y][x] = 1
    let cellNeighbors = createNeighborArr(x, y)
    
    cellNeighbors.forEach(function (cell) {
      
      if (cell.value === 0) {
        
        cascade(cell.xLocation, cell.yLocation)
      } else if (cell.value > 0){
        revealed[cell.yLocation][cell.xLocation] = 1
      }
    })
  }
}





function render() {
  
 
  revealed.forEach(function (row, y) {
    row.forEach(function (square, x) {
      if (square === 1) {
        if (gameBoard[y][x] > 0) {
          allSquares[parseInt(`${y}${x}`)].innerText = gameBoard[y][x]
          
        }
        
        allSquares[parseInt(`${y}${x}`)].classList.add('safe')
        
      }
    })
  })

  checkForWinner()

  if (winner !== null) {
    renderWinLoss()
  }

}

function checkForWinner() {
  countSquares = 0
  gameBoard.forEach(function (row) {
    row.forEach(function (square) {
      countSquares ++
    })
  })
  

  let total = 0
  revealed.forEach(function (row, i) {
    row.forEach(function (square, j) {
      if (square === 1) {
        total ++
      }
    })
  })

  if (countSquares - total === numMines) {
  winner = true
  
  }

}


function restart() {
  boardEl.innerText = ""
  init()
  boardEl.addEventListener('click', handleClick)
  boardEl.addEventListener('contextmenu', handleRightClick)
}


function renderWinLoss() {
  if (winner === true) {
  messageEl.innerHTML = "You Win! Congrats!"  
  boardEl.removeEventListener('click', handleClick)
  boardEl.removeEventListener('contextmenu', handleRightClick)
  replayButton.removeAttribute('hidden')
  pictureDiv.innerHTML = '<img src="images/arangutan-monkey.gif" alt="">'
  }
  if (winner === false) {
    gameBoard.forEach((row, i)=>{
      row.forEach((square, j)=>{
        if(square === -1){
         allSquares[parseInt(`${i}${j}`)].innerHTML = '<img src="images/favicon.png" alt="">'
        }
      })
    })
    messageEl.innerText = "You Lose =("
    boardEl.removeEventListener('click', handleClick)
    boardEl.removeEventListener('contextmenu', handleRightClick)
    replayButton.removeAttribute('hidden')
  }
}










