# Snake and Ladder Game
```markdown
This is a simple **Snake and Ladder** game implemented using HTML, CSS, and JavaScript. The game is designed with a Low-Level Design (LLD) approach, structuring the codebase into classes to separate game logic and make it modular, maintainable, and extensible.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [How to Run the Project](#how-to-run-the-project)
- [Game Rules](#game-rules)
- [Code Structure](#code-structure)
- [Future Improvements](#future-improvements)

## Features

- Two-player game with each player represented by a unique symbol.
- A 10x10 grid representing the board, where cells can contain snakes or ladders.
- Snakes and ladders positioned on the board, which players can encounter to either move forward or backward.
- Dice roll feature to determine player movement on each turn.
- Game status panel displaying the current player, dice result, and winner.

## Project Structure

    ├── index.html         # The main HTML file
    ├── style.css          # CSS styling for the board and UI elements
    ├── script.js          # JavaScript file containing game logic (LLD implemented)
    └── README.md          # Documentation for the project

## How to Run the Project

1. Clone this repository or download the project files.
   
   ```bash
   git clone https://github.com/divyesh123-jain/Snake-and-Ladder-LLD
   ```

2. Open `index.html` in a web browser.

3. Start playing the game by pressing the "Roll Dice" button.

## Game Rules

1. **Players and Turns**:
    - The game has two players, Player 1 (A) and Player 2 (B).
    - Players take turns rolling a dice, and the outcome determines their movement on the board.
2. **Snakes and Ladders**:
    - Ladders help players move up to higher positions.
    - Snakes send players down to a lower position.
3. **Winning Condition**:
    - The first player to reach the last cell (100) wins the game.

## Code Structure

The project is designed with an LLD approach using JavaScript classes:

### Key Classes

- **Cell**: Represents each cell on the board with properties for its number, type (normal, snake, ladder), and destination (if applicable).
- **Board**: Manages all cells, initializes the board with snakes and ladders, and determines a player's new position after each move.
- **Dice**: Simulates a dice roll.
- **Player**: Tracks individual player attributes, such as current position and symbol.
- **Game**: Coordinates the game flow, switching turns between players, rolling the dice, moving players, and checking the win condition.

### Example Code Structure

```javascript
class Cell {
  constructor(position, type = 'normal', destination = null) { ... }
}

class Board {
  constructor(size, snakes, ladders) { ... }
  createCells(snakes, ladders) { ... }
}

class Dice {
  roll() { return Math.floor(Math.random() * 6) + 1; }
}

class Player {
  constructor(name, label) { ... }
}

class Game {
  constructor(players, board) { ... }
  playTurn() { ... }
}
```

## Future Improvements

- Add animations for player movement.
- Enhance the board with graphical icons for snakes and ladders.
- Implement an AI player mode to play against the computer.
- Add a scoreboard to track wins and statistics.
- Allow users to customize board size and number of snakes/ladders.

## License

This project is open-source and available under the MIT License.

This README provides a comprehensive overview of the project, including setup, structure, and potential enhancements. Adjust the repository link and author information as needed.
```