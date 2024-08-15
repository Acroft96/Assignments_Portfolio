Project Overview: Connect Four Game in React

Description
This project is an extension of the Tic-Tac-Toe example, designed to help you learn React by implementing a Connect Four game. The main goal is to create a fully functional Connect Four game while focusing on understanding and applying React principles rather than perfecting the front-end design.

Game Logic
Board Structure:
The game board consists of 6 rows and 7 columns.
Tile Dropping:
Clicking on a column drops a user's tile into the lowest available spot in that column.
If the column is full, clicking on it does nothing.
Win Detection:
The game detects a winning situation when a player gets four tiles in a row horizontally, vertically, or diagonally.
Once a win is detected, the game displays the winner and prevents further play.
Tie Detection:
The game checks for a tie when the board is full and no player has four in a row.
Player Switching:
The game switches turns between two players after each move.
Tile Coloring:
Each player's tiles are colored differently to distinguish between them. No animations are needed.

Technologies Used
React: To build the user interface and manage the game state.
JavaScript: For implementing the game logic.
HTML/CSS: To structure and style the game board and tiles.

Technical Challenges
State Management:
Managing the state of the game board, tracking player turns, and detecting win/tie conditions required a well-structured state management approach using React hooks (useState).
Dynamic Rendering:
Dynamically rendering the game board and updating it based on user interactions posed a challenge. React's component-based architecture helped in breaking down the game into manageable pieces.
Win/Tie Detection Logic:
Implementing the logic to detect four in a row horizontally, vertically, and diagonally was complex. This required iterating over the board and checking multiple conditions efficiently.
Handling User Input:
Ensuring that user clicks were correctly interpreted to drop tiles in the appropriate columns, and handling cases where columns were full, needed careful event handling.

My Contributions
For this project, I was responsible for:
Building the Game Board:
Setting up the 6x7 grid structure using React components and CSS for layout and styling.
Implementing Game Logic:
Writing the functions to handle tile drops, detect wins/ties, and switch players.
Managing State:
Utilizing React's useState hook to manage the game state, including the board configuration, current player, and game status.
User Interface:
Ensuring the user interface was functional and intuitive, even though the primary focus was on learning React rather than front-end polish.