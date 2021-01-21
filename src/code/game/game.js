const MAX_MATCH_PAIRS = 8;

class Game {
  constructor() {
    this.board = null;
    this.userInterface = null;
    this.cards = [];
    this.moves = 0;
    this.flips = 0;
    this.matchedPairs = 0;
    this.firstCard = undefined;
    this.gameProgress = false;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setBoard(board) {
    this.board = board;
  }

  setUI(userInterface) {
    this.userInterface = userInterface;
  }

  resetAttr() {
    this.moves = 0;
    this.flips = 0;
    this.matchedPairs = 0;
    this.firstCard = undefined;
  }

  startNewGame() {
    this.resetAttr();
    this.cards = this.board.shuffleCards();
    this.userInterface.resetMovesCounter();
    this.userInterface.buildBoard(this.cards);
    this.userInterface.enableRestartButton();
    this.userInterface.startTime();
  }

  checkProspect(cardIndex) {
    if (cardIndex === null) {
      return false;
    }
    if (this.firstCard === cardIndex) {
      return false;
    }
    if (this.flips > 1) {
      return false;
    }
    if (this.userInterface.isMatched(cardIndex)) {
      return false;
    }
    return true;
  }

  async turn(cardIndex) {
    if (!this.checkProspect(cardIndex)) {
      return false;
    }

    this.userInterface.cardFaceUp(cardIndex);
    this.flips += 1;

    if (this.flips === 1) {
      this.firstCard = cardIndex;
    } else {
      this.moves += 1;
      this.userInterface.updateMovesCounter(this.moves);
      if (!this.board.compareCards(this.cards, this.firstCard, cardIndex)) {
        this.cardsNotMatched(this.firstCard, cardIndex);
      } else {
        this.cardsMatched(this.firstCard, cardIndex);
      }
    }

    if (this.matchedPairs >= MAX_MATCH_PAIRS) {
      this.userInterface.stopTime();
      await this.sleep(2000);
      this.userInterface.showWinBoard(this, this.moves);
      return true;
    }

    return false;
  }

  async cardsMatched(cardOneIndex, cardTwoIndex) {
    this.matchedPairs += 1;
    await this.sleep(600);
    this.userInterface.matchCards(cardOneIndex, cardTwoIndex);
    this.firstCard = undefined;
    this.flips = 0;
  }

  async cardsNotMatched(cardOneIndex, cardTwoIndex) {
    await this.sleep(1000);
    this.userInterface.cardFaceDown(cardOneIndex);
    this.userInterface.cardFaceDown(cardTwoIndex);
    this.firstCard = undefined;
    this.flips = 0;
  }
}

export default Game;
