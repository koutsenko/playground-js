import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import logger       from './logger'         ;

export default applyMiddleware(
  thunk       , // Первый, чтобы воспринимать thunk вместо объектов
  logger        // Второй, чтобы вывести действия до останова по ошибке
);

