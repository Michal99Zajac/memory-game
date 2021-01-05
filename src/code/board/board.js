import { Card } from './card'


class Board {
  constructor() {
    this.cardsTemplate = [
      new Card('A'),
      new Card('A'),
      new Card('B'),
      new Card('B'),
      new Card('C'),
      new Card('C'),
      new Card('D'),
      new Card('D'),
      new Card('E'),
      new Card('E'),
      new Card('F'),
      new Card('F'),
      new Card('G'),
      new Card('G'),
      new Card('H'),
      new Card('H')
    ];
  }

  compareCards(cards, indexCardOne, indexCardTwo) {
    if (cards[indexCardOne].value === cards[indexCardTwo].value) {
      return true;
    } else {
      return false;
    }
  }

  shuffleCards() {
    let positions = []
    let cards = [];
    let randomIndex;

    while (cards.length !== this.cardsTemplate.length) {
      randomIndex = Math.floor(this.cardsTemplate.length * Math.random());
      if (!positions.includes(randomIndex)) {
        positions.push(randomIndex);
        cards.push(this.cardsTemplate[randomIndex]);
      }
    }

    return cards
  }
}

export default Board;
