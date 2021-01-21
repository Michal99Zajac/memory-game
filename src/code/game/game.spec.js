import Board from '../board/board';
import { Card } from '../board/card';
import Game from './game';
import { assert, should, expect } from 'chai';
import UserInterface from '../user-interface/user-interface';

describe('Game', () => {
  let game = new Game();
  const board = new Board()

  beforeEach(() => {
    game = new Game();
  });

  describe('sleep functions', () => {
    it('should pass without error', async () => {
      await game.sleep(500);
      assert.equal(true, true);
    });
  });

  describe('set board', () => {
    it('should be same', () => {
      game.setBoard(board);
      assert.deepEqual(game.board, board);
    });
  });

  describe('restarted attrs', () => {
    game.moves = 5;
    game.flips = 5;
    game.matchedPairs = 5;
    game.firstCard = 5;

    it('moves should be equal 0', () => {
      assert.equal(game.moves, 0);
    });

    it('flips should be equal 0', () => {
      assert.equal(game.flips, 0);
    });

    it('matched pairs should be equal 0', () => {
      assert.equal(game.matchedPairs, 0);
    });

    it('first card should be undefined', () => {
      assert.notExists(game.firstCard);
    });
  });

  describe('check prospects', () => {
    it('if null should return false', () => {
      assert.isFalse(game.checkProspect(null));
    });

    it('if first card should return false', () => {
      game.firstCard = 1;
      assert.isFalse(game.checkProspect(1))
    });

    it('if flips are grater then one should return false', () => {
      game.flips = 2;
      assert.isFalse(game.checkProspect(2));
    })
  });

  describe('cards matched', () => {
    it('matched pairs should rised', () => {
      let matchedPairs = game.matchedPairs;
      game.cardsMatched(1, 2);
      assert.isAbove(game.matchedPairs, matchedPairs);
    })

    it('first card should be undefined', () => {
      game.cardsMatched(1, 2);
      assert.notExists(game.firstCard);
    });

    it('flips should be equal 0', () => {
      game.cardsMatched(1, 2);
      assert.equal(game.flips, 0);
    });
  });

  describe('cards not matched', () => {
    it('matched pairs should not rised', () => {
      let matchedPairs = game.matchedPairs;
      game.cardsNotMatched(1, 2);
      assert.equal(game.matchedPairs, matchedPairs);
    })

    it('first card should be undefined', () => {
      game.cardsNotMatched(1, 2);
      assert.notExists(game.firstCard);
    });

    it('flips should be equal 0', () => {
      game.cardsNotMatched(1, 2);
      assert.equal(game.flips, 0);
    });
  });
});
