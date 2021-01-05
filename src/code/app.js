import Board from './board/board';
import Game from './game/game';
import UserInterface from './user-interface/user-interface';

const board = new Board();
const userInterface = new UserInterface();
const game = new Game();

game.setBoard(board);
game.setUI(userInterface);
game.startNewGame();

document.getElementsByClassName('cards')[0].addEventListener('click', (event) => {
  game.turn(event.target.getAttribute('id'));
})

document.getElementsByClassName('restart')[0].addEventListener('click', (event) => {
  game.startNewGame();
})
