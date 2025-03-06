import actions from '../constants/app';
import holders from '../constants/holders';

export default {
  reset2: function() {
    return function(dispatch, getState) {
      let state = getState();
      let holderKeys = Object.keys(holders);
      let time = 0;
      dispatch({
        type  : actions.LOCK_GUI
      });
      holderKeys.splice(holderKeys.indexOf(holders.DECK), 1);
      holderKeys.forEach(function(key) {
        state.holders.byId[key].cards.slice().reverse().forEach(function(id, index, all) {
          time += 50;
          setTimeout(function() {
            dispatch({
              id      : id,
              source  : key,
              type    : actions.CARD_RETURN
            });
          }.bind(this), time);
        });
      });
      setTimeout(function() {
        dispatch({
          type  : actions.UNLOCK_GUI
        });
      }.bind(this), time);
    };
  },
  reset: function() {
    return function(dispatch, getState) {
      dispatch({
        type    : actions.DECK_RESET
      });
    };
  },
  open: function() {
    return function(dispatch, getState) {
      let state = getState();
      let source = state.holders.byId[holders.DECK].cards;
      let cardId = source.length ? source[source.length-1] : undefined;
      if (cardId === undefined) {
        return;
      }

      dispatch({
        id      : cardId,
        type    : actions.OPEN_CARD
      });
    };
  },
  fill: function() {
    return function(dispatch, getState) {
      let state = getState();
      let source = state.holders.byId[holders.DECK].cards;
      if (source.length < 4) {
        return;
      }

      dispatch({
        ids   : source.slice(-4).reverse(),
        type  : actions.FILL_STACK1
      })
    };
  },
  move: function() {
    return function(dispatch, getState) {
      let state = getState();
      let source = state.holders.byId[holders.STACK1].cards;
      if (source.length < 3) {
        return;
      }

      dispatch({
        ids   : source.slice(-3),
        type  : actions.MOVE_STACK12
      })
    };
  }
};