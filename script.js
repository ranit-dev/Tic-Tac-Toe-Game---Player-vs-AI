const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('resetButton');

let board = Array(9).fill(null);
let currentPlayer = 'X'; // User is X, Computer is O
let gameActive = true;

// Winning patterns
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Handle cell clicks
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (gameActive && currentPlayer === 'X' && !cell.textContent) {
            const index = cell.getAttribute('data-index');
            makeMove(index, 'X');
            if (gameActive) {
                currentPlayer = 'O';
                statusText.textContent = "Computer's turn (O)";
                setTimeout(computerMove, 500); // Delay for computer move
            }
        }
    });
});

// Make a move
function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;
    cells[index].classList.add(player);
    checkWin();
}

// Computer's move using Minimax
function computerMove() {
    let bestScore = -Infinity;
    let bestMove;

    // Evaluate all possible moves
    for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
            board[i] = 'O'; // Try the move
            let score = minimax(board, 0, false); // Minimax evaluation
            board[i] = null; // Undo the move

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    makeMove(bestMove, 'O');
    currentPlayer = 'X';
    statusText.textContent = "Your turn (X)";
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {
    // Check for terminal states (win, lose, or draw)
    const result = checkTerminalState();
    if (result !== null) {
        return result;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'O'; // Try the move
                let score = minimax(board, depth + 1, false); // Recursively evaluate
                board[i] = null; // Undo the move
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'X'; // Try the move
                let score = minimax(board, depth + 1, true); // Recursively evaluate
                board[i] = null; // Undo the move
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Check for terminal state (win, lose, or draw)
function checkTerminalState() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a] === 'O' ? 1 : -1; // AI wins: 1, Player wins: -1
        }
    }

    if (!board.includes(null)) {
        return 0; // Draw
    }

    return null; // Game not over
}

// Check for a win or draw
function checkWin() {
    const result = checkTerminalState();
    if (result !== null) {
        gameActive = false;
        if (result === 1) {
            statusText.textContent = "Computer wins!";
            highlightWinningCells();
        } else if (result === -1) {
            statusText.textContent = "You win!";
            highlightWinningCells();
        } else {
            statusText.textContent = "It's a draw!";
        }
    }
}

// Highlight winning cells
function highlightWinningCells() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            cells[a].classList.add('win');
            cells[b].classList.add('win');
            cells[c].classList.add('win');
            break;
        }
    }
}

// Reset the game
resetButton.addEventListener('click', () => {
    board = Array(9).fill(null);
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O', 'win');
    });
    gameActive = true;
    currentPlayer = 'X';
    statusText.textContent = "Your turn (X)";
});