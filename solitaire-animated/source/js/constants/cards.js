export default {
  getIds: function() {
    return this.SUITS.map(function(suit) {
      return this.RANKS.map(function(rank) {
        return rank+suit;
      }.bind(this));
    }.bind(this)).reduce(function(prev, current) {
      return prev.concat(current);
    });
  },
  SUITS: ['S', 'H', 'D', 'C'],
  RANKS: ['2', '3', '4', '5', '6', '7', '8', '9', '=', 'J', 'Q', 'K', 'A']
  // SUITS: ['S'],
  // RANKS: ['2']
  // SUITS: ['S', 'H'],
  // RANKS: ['2', '3']
};
