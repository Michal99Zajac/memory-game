class UserInterface {
  constructor() {
    this.time = null;
    this.timeMin = 0;
    this.timeSec = 0;
    this.timer = document.getElementsByClassName('timer')[0];
    this.moveCounter = document.getElementsByClassName('moves')[0];
  }

  clearBoard() {
    const boardDOM = document.getElementsByClassName('cards')[0];
    if (boardDOM.childElementCount > 0) {
      while (boardDOM.firstChild) {
        boardDOM.removeChild(boardDOM.firstChild);
      }
    }
  }

  buildBoard(cards) {
    this.clearBoard();
    const boardDOM = document.getElementsByClassName('cards')[0];
    cards.forEach((card, index) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('id', `${index}`);
      liElement.setAttribute('class', 'card');
      const spanElement = document.createElement('span');
      spanElement.setAttribute('class', 'parag');
      spanElement.innerHTML = card.value;
      liElement.appendChild(spanElement);
      boardDOM.appendChild(liElement);
    })
  }

  cardFaceUp(cardIndex) {
    const card = document.getElementById(cardIndex);
    card.setAttribute('class', 'card awers');
  }

  cardFaceDown(cardIndex) {
    const card = document.getElementById(cardIndex);
    card.setAttribute('class', 'card rewers');
  }

  matchCards(cardOneIndex, cardTwoIndex) {
    const cardOne = document.getElementById(cardOneIndex);
    const cardTwo = document.getElementById(cardTwoIndex);
    cardOne.setAttribute('class', 'card matched');
    cardTwo.setAttribute('class', 'card matched');
  }

  isMatched(cardIndex) {
    return document.getElementById(cardIndex).getAttribute('class').includes('matched')
  }

  updateMovesCounter(moves) {
    this.moveCounter.innerHTML = `${moves} moves`;
  }

  resetMovesCounter() {
    this.moveCounter.innerHTML = `0 moves`;
  }

  startTime() {
    this.stopTime();
    this.timeMin = 0;
    this.timeSec = 0;
    this.timer.innerHTML = `${this.timeMin}:${this.timeSec}`;
    this.time = setInterval(this.updateTime, 1000, this);
  }

  stopTime() {
    if (this.time) {
      clearInterval(this.time);
      this.time = null;
    }
  }

  updateTime(ui) {
    ui.timeSec += 1;
    if (ui.timeSec >= 60) {
      ui.timeSec = 0;
      ui.timeMin += 1;
    }
    ui.timer.innerHTML = `${ui.timeMin}:${ui.timeSec}`;
  }

  disableRestartButton() {
    const button = document.getElementsByClassName('restart')[0];
    button.disabled = true;
  }

  enableRestartButton() {
    const button = document.getElementsByClassName('restart')[0];
    button.disabled = false;
  }

  showWinBoard(game, moves) {
    this.disableRestartButton()
    this.blurGame();
    this.stopTime();
    const winTimer = document.getElementById('timer');
    const winMoves = document.getElementById('moves');
    winTimer.innerHTML = `${this.timeMin}:${this.timeSec}`;
    winMoves.innerHTML = `${moves}`;

    const winButton = document.getElementsByClassName('win-button')[0];
    winButton.game = game;
    winButton.addEventListener('click', this.setup);
    document.getElementsByClassName('win-board')[0].setAttribute('style', 'display: flex;');
  }

  blurGame() {
    const game = document.getElementsByClassName('game')[0];
    game.setAttribute('style', '-webkit-filter: blur(12px);');
  }

  setup(event) {
    document.getElementsByClassName('win-board')[0].setAttribute('style', 'display: none;');
    document.getElementsByClassName('game')[0].setAttribute('style', '-webkit-filter: none;');
    event.target.game.startNewGame();
  }
}

export default UserInterface;
