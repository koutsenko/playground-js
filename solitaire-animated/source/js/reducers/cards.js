/**
 * Редьюсер состояния колоды карт, пока хранит только массив id карт.
 */

import constants from '../constants/app';
import cardsConstants from '../constants/cards';
import holderConstants from '../constants/holders';

function buildFreshState() {
  let state = {
    byId    : {},
    allIds  : []
  };

  cardsConstants.getIds().forEach(function(cardId, index) {
    state.allIds.push(cardId);
    state.byId[cardId] = {
      id    : cardId,
      flip  : false
    };
  });

  return state;
}

export default function(state, action) {
  if (state === undefined) {
    state = buildFreshState();
  }

  switch (action.type) {
    case constants.DECK_RESET:
      return buildFreshState();
      
    case constants.OPEN_CARD:
      var newState = JSON.parse(JSON.stringify(state));
      newState.byId[action.id].flip = !newState.byId[action.id].flip;
      return newState;

    case constants.FILL_STACK1:
      var newState = JSON.parse(JSON.stringify(state));
      action.ids.forEach(function(id) {
        newState.byId[id].flip = true;
      });
      return newState;

    case constants.CARD_RETURN:
      var newState = JSON.parse(JSON.stringify(state));
      newState.byId[action.id].flip = false;
      return newState;

    default:
      return state;
  };
};
