
const BOARD_SIZE = 100;
const SNAKES = {
  99: 7,
  76: 54,
  65: 45,
  49: 11,
  47: 19,
  25: 3
};
const LADDERS = {
  2: 23,
  8: 34,
  20: 77,
  41: 79,
  54: 93,
  71: 91
};

let currentPlayerIndex = 0;
let players = [
  { name: 'Player 1', position: 1, label: 'A' },
  { name: 'Player 2', position: 1, label: 'B' }
];
let gameBoard = document.getElementById('gameBoard');
let diceResult = document.getElementById('diceResult');
let playerName = document.getElementById('playerName');
let gameStatus = document.getElementById('gameStatus');


function createBoard() {
  gameBoard.innerHTML = '';
  let isReverse = true;

  for (let row = 10; row > 0; row--) {
    for (let col = 1; col <= 10; col++) {
      let cellNumber = isReverse ? (row - 1) * 10 + col : row * 10 - col + 1;
      let cell = document.createElement('div');
      cell.setAttribute('id', 'cell' + cellNumber);
      cell.classList.add('cell');

      let cellNumberLabel = document.createElement('span');
      cellNumberLabel.textContent = cellNumber;
      cellNumberLabel.classList.add('cell-number');
      cell.appendChild(cellNumberLabel);

      gameBoard.appendChild(cell);
    }
    isReverse = !isReverse; 
  }
}

function movePlayer(player) {
 
  let previousCell = document.getElementById('cell' + player.position);
  if (previousCell) {
    let playerMarker = previousCell.querySelector('.player-marker');
    if (playerMarker) {
      playerMarker.remove();
    }
  }

  player.position += rollDice();

  if (player.position > BOARD_SIZE) {
    player.position = BOARD_SIZE;
  }

  if (SNAKES[player.position]) {
    player.position = SNAKES[player.position];
    gameStatus.textContent = `${player.name} encountered a snake!`;
  } else if (LADDERS[player.position]) {
    player.position = LADDERS[player.position];
    gameStatus.textContent = `${player.name} climbed a ladder!`;
  }


  let newCell = document.getElementById('cell' + player.position);
  let playerMarker = document.createElement('span');
  playerMarker.classList.add('player-marker');
  playerMarker.textContent = player.label; // A or B
  newCell.appendChild(playerMarker);
}


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function takeTurn() {
  let player = players[currentPlayerIndex];
  let diceRollResult = rollDice();
  diceResult.textContent = `Dice Result: ${diceRollResult}`;

  movePlayer(player);

  if (player.position === BOARD_SIZE) {
    gameStatus.textContent = `${player.name} wins the game!`;
    document.getElementById('rollDiceButton').disabled = true;
    return;
  }

  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  playerName.textContent = players[currentPlayerIndex].name;
}

document.getElementById('rollDiceButton').addEventListener('click', takeTurn);

createBoard();
