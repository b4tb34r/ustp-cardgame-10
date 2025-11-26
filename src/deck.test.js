const { shuffleDeck } = require('./deck');

describe('shuffleDeck', () => {
  test('returns an array of the same length', () => {
    const cards = ['A♠', 'K♠', 'Q♠', 'J♠'];
    const shuffled = shuffleDeck(cards);
    expect(shuffled).toHaveLength(cards.length);
  });

  test('contains the same elements after shuffle', () => {
    const cards = ['A♠', 'K♠', 'Q♠', 'J♠'];
    const shuffled = shuffleDeck(cards);
    expect(shuffled.sort()).toEqual(cards.sort());
  });
});
