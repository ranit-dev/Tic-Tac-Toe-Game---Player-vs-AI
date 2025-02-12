# Tic Tac Toe Game

## Overview
This project is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game allows a player to compete against an AI opponent that uses the Minimax algorithm to make optimal moves. The game features a responsive design, animations, and a reset button to start a new game.

## Features
- **Player vs AI**: Play against an AI that uses the Minimax algorithm for optimal decision-making.
- **Responsive Design**: The game is designed to be responsive and works well on different screen sizes.
- **Animations**: Smooth animations for cell clicks and winning patterns.
- **Reset Button**: Easily reset the game to start a new match.
- **Winning Highlight**: Winning cells are highlighted with a light green background and an animation.

## Files
- **index.html**: The main HTML file that structures the game board and includes the necessary elements.
- **style.css**: The CSS file that styles the game, including the board, cells, and animations.
- **script.js**: The JavaScript file that contains the game logic, including the Minimax algorithm for the AI.

## How to Play
1. Open the `index.html` file in your web browser.
2. The game starts with the player's turn (X). Click on any empty cell to make your move.
3. The AI (O) will automatically make its move after the player.
4. The game will announce the winner (either the player or the AI) or declare a draw if no one wins.
5. Use the "Reset Game" button to start a new game at any time.

## Code Structure
- **HTML**: The game board is structured using a grid of 9 cells, each with a `data-index` attribute to identify its position.
- **CSS**: The styles include animations for cell clicks, winning patterns, and hover effects. The winning cells are highlighted with a light green background.
- **JavaScript**: The game logic includes:
  - Handling cell clicks and updating the board.
  - Implementing the Minimax algorithm for the AI's moves.
  - Checking for a win or draw and updating the game status.
  - Resetting the game when the reset button is clicked.

## Dependencies
- This project does not require any external libraries or dependencies. It uses plain HTML, CSS, and JavaScript.

## Future Improvements
- **Multiplayer Mode**: Add a two-player mode where two humans can play against each other.
- **Difficulty Levels**: Implement different difficulty levels for the AI.
- **Score Tracking**: Keep track of the player's and AI's scores across multiple games.
- **Mobile Optimization**: Further optimize the game for mobile devices with touch controls.

## License
This project is open-source and available under the MIT License. Feel free to modify and distribute it as needed.

## Author
[Ranit Manna]

## Acknowledgments
- The Minimax algorithm implementation is inspired by various online resources and tutorials on game AI.

---

Enjoy playing Tic Tac Toe!
