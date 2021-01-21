import { Card } from './card';
import { assert } from 'chai'

describe('Card', () => {
  it('should give correct value', () => {
    const card = new Card('A')
    assert.equal(card.value, 'A')
  });
});
