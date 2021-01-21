import Board from './board';
import { Card } from './card';
import { assert, should, expect } from 'chai';

describe('Board', () => {
  const board = new Board();

  describe('compared cards', () => {
    const cards = [new Card('A'), new Card('B')]
    it('should be same', () => {
      assert.equal(
        board.compareCards(cards, 0, 0),
        true
      )
    });

    it('should not be same', () => {
      assert.equal(
        board.compareCards(cards, 0, 1),
        false
      )
    });
  });

  describe('cards template', () => {
    it('should have same members', () => {
      const new_board = new Board();
      assert.sameDeepMembers(board.cardsTemplate, new_board.cardsTemplate);
    });

    it('should have 16 cards', () => {
      expect(board).to.have.property('cardsTemplate').with.length(16);
    });
  });

  describe('shuffle cards', () => {
    it('should have 16 members', () => {
      assert.lengthOf(board.shuffleCards(), 16);
    });

    it('should have all template cards', () => {
      expect(board.shuffleCards()).to.have.members(board.cardsTemplate);
    });

    it('should be shuffeled', () => {
      const setOne = board.shuffleCards();
      const setTwo = board.shuffleCards();
      assert.notEqual(setOne, setTwo);
    });
  });
});
