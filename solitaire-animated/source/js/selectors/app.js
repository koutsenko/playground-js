import { createSelector } from 'reselect';

import holders from '../constants/holders';

const getCards = (state) => state.cards.byId;

const getDeckCardIds    = (state) => state.holders.byId[holders.DECK].cards;
const getOpenCardIds    = (state) => state.holders.byId[holders.OPEN].cards;
const getStack1CardIds  = (state) => state.holders.byId[holders.STACK1].cards;
const getStack2CardIds  = (state) => state.holders.byId[holders.STACK2].cards;

const resultFunc = (ids, cards) => ids.map((id) => cards[id]);

export default {
  getDeckCards    : createSelector([getDeckCardIds  , getCards], resultFunc),
  getOpenCards    : createSelector([getOpenCardIds  , getCards], resultFunc),
  getStack1Cards  : createSelector([getStack1CardIds, getCards], resultFunc), 
  getStack2Cards  : createSelector([getStack2CardIds, getCards], resultFunc)
};