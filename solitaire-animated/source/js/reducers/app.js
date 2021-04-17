import { combineReducers } from 'redux';

import cards    from './cards'    ;
import gui      from './gui'      ;
import holders  from './holders'  ;

export default combineReducers({
  gui,
  cards,
  holders
});