/**
 * Редьюсер состояния колоды карт, пока хранит только массив id карт.
 */

import constants  from '../constants/app'     ;
import cardsConstants      from '../constants/cards'   ;
import holders    from '../constants/holders' ;

function buildEmptyState() {
  let state = {
    byId    : {},
    allIds  : []
  };

  Object.keys(holders).map(function(key) {   
    state.byId[key] = {
      id    : key,
      cards : []
    };
    state.allIds.push(key);
  });

  return state;
}

function buildFreshState() {
  let state = buildEmptyState();

  state.byId[holders.DECK].cards = cardsConstants.getIds();

  return state;
}

export default function(state, action) {
  if (state === undefined) {
    return buildEmptyState();
  }

  switch (action.type) {
    case constants.DECK_RESET:
      return buildFreshState();

    case constants.OPEN_CARD:
      var newState = JSON.parse(JSON.stringify(state));
      newState.byId[holders.DECK].cards.splice(newState.byId[holders.DECK].cards.indexOf(action.id), 1);
      newState.byId[holders.OPEN].cards.push(action.id);
      return newState;

    case constants.FILL_STACK1:
      var newState = JSON.parse(JSON.stringify(state));
      var source = newState.byId[holders.DECK].cards;
      var target = newState.byId[holders.STACK1].cards;
      action.ids.forEach(function(id) {
        source.splice(source.indexOf(id), 1);
        target.push(id);
      });
      return newState;

    case constants.CARD_RETURN:
      var newState = JSON.parse(JSON.stringify(state));
      var source = newState.byId[action.source].cards;
      var target = newState.byId[holders.DECK].cards;
      source.splice(source.indexOf(action.id), 1);
      target.push(action.id);
      return newState;

    case constants.MOVE_STACK12:
      var newState = JSON.parse(JSON.stringify(state));
      var source = newState.byId[holders.STACK1].cards;
      var target = newState.byId[holders.STACK2].cards;
      action.ids.forEach(function(id) {
        source.splice(source.indexOf(id), 1);
        target.push(id);
      });
      return newState;

    default:
      return state;
  };
};
